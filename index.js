/*
 * @Author: xiawang1024
 * @Date: 2022-03-11 15:01:00
 * @LastEditTime: 2022-03-11 17:16:30
 * @LastEditors: xiawang1024
 * @Description: 
 * @FilePath: /pm2Project/index.js
 * 工作，生活，健康
 */
const Koa = require('koa');
const app = new Koa()


app.use(async ctx => {
    ctx.body = process.env.NODE_ENV
})

app.listen(8008)