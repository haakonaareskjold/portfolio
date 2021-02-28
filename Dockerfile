FROM node:15.10.0-alpine3.12

WORKDIR /app

COPY package*.json /app/

COPY ./ /app/

RUN npm install --silent

EXPOSE 3000

RUN npm run build

CMD [ "node", "server.js" ]
