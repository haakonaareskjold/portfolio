FROM node:15.4.0-alpine3.12

WORKDIR /app

COPY package.json package-lock.json /app/

COPY . /app

RUN npm install --production

EXPOSE 80

RUN npm run test

CMD [ "node", "server.js" ]
