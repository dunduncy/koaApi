const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(3002, () => {
  console.log('server is running on http://localhost:3002')
})
