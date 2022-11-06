import Koa from 'koa'
import body from 'koa-body'
import json from 'koa-json'
import Router from 'koa-router'
import userRouter from './user'

const app = new Koa();
const router = new Router();
router.prefix('/dang')

router.get('/test',async (ctx) => {
	ctx.body = '当当'
})
router.use(json())
router.use(body())

router.use(userRouter.routes(),userRouter.allowedMethods())

app.use(router.routes())
app.listen('9080',() => {
	console.log ('Koa服务启动了');
})
