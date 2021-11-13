# FlutterInfraProject

## How To Setup : 

### pré-requis :
- machine rocky linux with internet access

### docker

```
dnf update -y

reboot

dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo

systemctl start docker

systemctl enable docker

sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

cd /home/admin

git clone https://github.com/rastain42/FlutterInfraProject

chmod +x /FlutterInfraProject/api/app/wait-for.sh

docker-compose -f docker-compose.yml up -d

```

## archi

- docker compose
  - node js api
    - nodemon : reload code without having to restart the app
  - mongo db
  - mongo express
