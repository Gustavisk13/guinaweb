#!/usr/bin/env bash

GREEN="\033[32m"
NORMAL="\033[0m"

USERNAME=gustavisk
IMAGE=guinaweb


read -p 'Insira a versão do git: ' VERSIONGIT

git pull
git add .
git commit -a -m"Nova versão do Docker: $VERSIONGIT"
git tag $VERSIONGIT HEAD
git push

npm run build

docker build -t $USERNAME/$IMAGE:latest .



docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$VERSIONGIT

docker push $USERNAME/$IMAGE:latest

docker push $USERNAME/$IMAGE:$VERSIONGIT