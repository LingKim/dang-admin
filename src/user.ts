import { Context } from 'koa'
import Router from 'koa-router'

const router = new Router();

router.prefix('/usermodule')

router.get('/findUserInfo/:username',async (ctx) => {
	 const { username } =  ctx.params;
	 ctx.body = `欢迎${username}`
})

router.post('/addUser',async (ctx) => {
	const { username } =  ctx.request.body;
	ctx.body = `欢迎${username}`
})

export default router
