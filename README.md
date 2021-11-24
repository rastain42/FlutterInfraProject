# FlutterInfraProject

## How To Setup : 

### pré-requis :

- machine rocky linux with internet access
- docker, docker-compose
- git, curl

### install des paquets nécessaires

```bash
dnf update -y

reboot

dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo

sudo dnf install -y docker-ce

systemctl start docker

systemctl enable docker

sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo usermod -aG docker $USER

sudo dnf install -y curl git

logout
```

```bash
cd /home/admin

git clone https://github.com/rastain42/FlutterInfraProject

cd FlutterInfraProject/api_node-mongo/

docker-compose up -d

```

## archi

- docker compose
  - nodeJs api
  - mongo db
 # - mongo express
