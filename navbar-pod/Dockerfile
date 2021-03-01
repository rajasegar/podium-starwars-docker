FROM node:12.18.2

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install

COPY . .
CMD ["node", "index.js"]

EXPOSE 3001
