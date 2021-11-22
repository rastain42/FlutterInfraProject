FROM node:10-alpine

RUN mkdir -p /home/admin/FlutterInfraProject/api/app/node_modules && chown -R node:node /home/admin/FlutterInfraProject/api/app

WORKDIR /home/admin/FlutterInfraProject/api/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "server.js" ]