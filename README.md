# FlutterInfraProject

#### description

Voici comment setup l'api CRUD de notre application,
l'appli flutter envoie des requètes a ce serveur pour récuperer des évents à afficher sur un calendrier,
créer des évents, les modifier ou les supprimer
on utilise mongo express pour avoir un accès graphique à notre base de données mongo.
Le tout étant compris dans un docker compose qui place ces processus dans un réseau bridge

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
## Usage

### exemples de requètes
192.168.140.4 étant l'adresse ip de ma vm, en utilisant postman sur mon windows
j'envoie une reqète POST à 192.168.140.4:6868/api/events 
```
{
    "title": "FirstEvent",
    "description": "description numba one",
    "done": false,
    "eventStart": "2021-11-10T16:05:04.747Z",
    "eventEnd": "2021-11-22T05:51:44.747Z",
    "userID": "3"
}
```

l'évent est bien enregistré en bdd car je recois :
```
[
    {
        "title": "FirstEvent",
        "description": "description numba one",
        "done": false,
        "eventStart": "2021-11-10T16:05:04.747Z",
        "eventEnd": "2021-11-22T05:51:44.747Z",
        "createdAt": "2021-11-24T15:34:18.654Z",
        "updatedAt": "2021-11-24T15:34:18.654Z",
        "id": "619e5b7ace77d580bf21d141"
    }
]
```
en envoyant une requète GET à 192.168.140.4:6868/api/events

### mongo express

lorsque je me connecte à l'adresse 192.168.140.4:8081, je peux visualiser ma base de données grâce a un outil graphique

## archi

- docker compose
  - nodeJs api
  - mongo db
  - mongo express
