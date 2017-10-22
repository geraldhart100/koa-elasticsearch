# koa-elasticsearch

Assign Elasticsearch client to Koa app context

## Install

```sh
npm install koa-elasticsearch
```

## Usage

```js
// const Koa = require('koa')
// const app = new Koa()

const es = require('koa-elasticsearch')

app.use(es())

app.use(async ctx => {
  const { client } = ctx

  const res = await client
    .search({ q: 'exo' })

  ctx.body = res.hits
})
```

## License

MIT
