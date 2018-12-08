# nuxtjs 用户登录存储用户信息和token,实现权限认证

> 利用js-cookie 保存token，这样能在token能在头部被获取，同时并用vuex,将token和用户信息存储在store中,使用中间件重置store数据。

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
