#!/bin/bash

# Example command:
# boilerplate.sh myApp

# This script will clone the repo and install all the dependencies

# Store command arguments in an array
args=("$@")
#echo arguments to the shell

# clone the repo using project name
git clone https://github.com/davideast/react-boilerplate ${args[0]}

# cd into folder
cd ${args[0]}

# remove the old .git folder
rm -rf .git

# make a new .git repo
git init

# npm install
npm install