FROM node:15.2.0-alpine3.12

WORKDIR /app

COPY package.json /app/package.json

COPY . /app

RUN npm install --save express

EXPOSE 80

CMD [ "node", "server.js" ]
