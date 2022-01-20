FROM node:lts-alpine

RUN mkdir /application

WORKDIR /application

ADD . /application/

RUN npm install --global serve

RUN npm ci

RUN npm run build

EXPOSE 4000

CMD [ "serve", "-s", "build", "-l", "4000" ]