FROM node:15.2.0-alpine3.12

WORKDIR /app

COPY package.json package-lock.json ./

COPY app.js ./

RUN npm install

ENV NODE_ENV=production

EXPOSE 80

CMD [ "node", "app.js" ]