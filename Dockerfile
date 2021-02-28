FROM node:15.10.0-alpine3.12

WORKDIR /app

COPY package*.json /app/

COPY ./ /app/

EXPOSE 3000


CMD [ "node", "server.js" ]
