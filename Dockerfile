FROM node:8

COPY env.js nuxt.config.js package.json .editorconfig .eslintrc.js package-lock.json /app/

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

COPY . /app

RUN npm run build

ENV HOST=0.0.0.0

CMD ["npm","start"]
