FROM node:14

WORKDIR /nodeApp
COPY package.json .
RUN npm install
COPY . .
CMD npm start
