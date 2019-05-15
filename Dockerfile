FROM node:8.9.0-alpine
#FROM nginx:latest

#ARG NODE_ENV=production
#ENV NODE_ENV=$NODE_ENV

# Set a working directory
WORKDIR /usr/src/app

#RUN npm i -g babel-cli

COPY package.json yarn.lock ./
COPY src ./src
COPY public ./public
COPY babel.config.js ./babel.config.js

RUN yarn install
RUN yarn serve

#RUN yarn --no-cache --production=false
#RUN yarn run build -- --release

#RUN npm run build
#COPY ./build .

## Install Node.js dependencies
#RUN yarn install --production --no-progress

## Copy application files

# Run the container under "node" user by default
#USER node

#CMD [ "node", "./build/server.js" ]
