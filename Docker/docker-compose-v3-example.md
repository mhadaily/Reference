### Docker compose v3 example

This example application contains 5 services with following deployment configurations:

<ol>
  <li>voting-app - a Python webapp which lets you vote between two options; requires redis</li>
  <li>redis - Redis queue which collects new votes; deployed on swarm manager node</li>
  <li>worker .NET worker which consumes votes and stores them in db;
    <ul>
      <li>number of replicas: 2 replicas</li>
      <li>hard limit: max 25% CPU and 512MB memory</li>
      <li>soft limit: max 25% CPU and 256MB memory</li>
      <li>placement: on swarm worker nodes only</li>
      <li>restart policy: restart on-failure, with 5 seconds delay, up to 3 attempts</li>
      <li>update policy: one by one, with 10 seconds delay and 0.3 failure rate to tolerate during the update</li>
    </ul>
  </li>
  <li>db - Postgres database backed by a Docker volume; deployed on swarm manager node</li>
  <li>result-app Node.js webapp which shows the results of the voting in real time; 2 replicas, deployed on swarm worker nodes</li>
</ol>

```docker
services:

  redis:
    image: redis:3.2-alpine
    ports:
      - "6379"
    networks:
      - voteapp
    deploy:
      placement:
        constraints: [node.role == manager]

  db:
    image: postgres:9.4
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - voteapp
    deploy:
      placement:
        constraints: [node.role == manager]

  voting-app:
    image: gaiadocker/example-voting-app-vote:good
    ports:
      - 5000:80
    networks:
      - voteapp
    depends_on:
      - redis
    deploy:
      mode: replicated
      replicas: 2
      labels: [APP=VOTING]
      placement:
        constraints: [node.role == worker]

  result-app:
    image: gaiadocker/example-voting-app-result:latest
    ports:
      - 5001:80
    networks:
      - voteapp
    depends_on:
      - db

  worker:
    image: gaiadocker/example-voting-app-worker:latest
    networks:
      voteapp:
        aliases:
          - workers
    depends_on:
      - db
      - redis
    # service deployment
    deploy:
      mode: replicated
      replicas: 2
      labels: [APP=VOTING]
      # service resource management
      resources:
        # Hard limit - Docker does not allow to allocate more
        limits:
          cpus: '0.25'
          memory: 512M
        # Soft limit - Docker makes best effort to return to it
        reservations:
          cpus: '0.25'
          memory: 256M
      # service restart policy
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s
      # service update configuration
      update_config:
        parallelism: 1
        delay: 10s
        failure_action: continue
        monitor: 60s
        max_failure_ratio: 0.3
      # placement constraint - in this case on 'worker' nodes only
      placement:
        constraints: [node.role == worker]

networks:
    voteapp:

volumes:
  db-data:
```