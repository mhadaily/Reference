So depends on the way it was dumped out. You can probably figure it out using the excellent file(1) command - if it mentions ASCII text and/or SQL, it should be restored with psql otherwise you should probably use pg_restore

Restoring is pretty easy:

````postgresql
psql -U <username> -d <dbname> -1 -f <filename>.sql
````
or

````postgresql
pg_restore -U <username> -d <dbname> -1 <filename>.dump
````

