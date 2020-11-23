FROM node:15.2.0-alpine3.12

LABEL maintainer="Haakon"

WORKDIR /app

COPY package.json package-lock.json /app/

COPY . /app

RUN npm install --production

EXPOSE 8000

CMD [ "node", "server.js" ]
