FROM node:22.9.0-alpine3.20

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]