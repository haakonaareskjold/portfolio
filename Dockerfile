FROM node:15.2.0-alpine3.12

WORKDIR /app

COPY package*.json ./

COPY server.js ./

RUN npm install

EXPOSE 80

CMD [ "node", "server.js" ]