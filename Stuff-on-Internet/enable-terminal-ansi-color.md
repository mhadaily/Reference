Color schemes itself are just overwrite ANSI-color values in Terminal.app, but you have to enable color formatting in command line utilities to see any formatted output.

Here some options:

Manually enabling color formatting for such commands like ls:
Open your .bash_profile or .bash_profile (I believe you're using bash shell, am i right?) in any text editor like nano ~/.bash_profile and paste following somewhere in the end of file:
````
export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias ls='ls -GFh'
````
Then save it, exit editor and type source ~/.bash_profile.

Simpler variant: 
````
install grc via homebrew
brew install grc
echo ‘source “`brew –prefix grc`/etc/grc.bashrc”‘ >> ~/.bash_profile
source ~/.bash_profile
````
It'll give you more color formatting options

Another great solution - install zsh shell with oh-my-zsh. There are dozen of formatting themes for shell prompt (with coloring output).