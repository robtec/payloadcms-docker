FROM node:18.8-alpine as builder

ENV NODE_ENV=production

WORKDIR /home/node/app/

COPY package*.json ./

COPY . .

RUN npm install copyfiles -g

RUN yarn install

RUN yarn build

FROM node:18.8-alpine

ARG SECRET_KEY

ENV PAYLOAD_SECRET=${SECRET_KEY}

WORKDIR /home/node/app/

COPY --from=builder /home/node/app/ /home/node/app/

CMD ["yarn", "serve"]
