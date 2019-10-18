FROM node:11.10.1-alpine
LABEL Author Makeomatic team
ENV NODE_DIR /home/nodejs/app
WORKDIR $NODE_DIR
COPY package.json $NODE_DIR
RUN yarn install --production
COPY . $NODE_DIR

EXPOSE 3000
CMD ["yarn", "start"]
