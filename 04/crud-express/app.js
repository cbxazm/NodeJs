/**
 * 入口模块的职责
 * 启动服务
 * 模板引擎
 * body-parser 解析表单post请求体的数据
 * 提供静态资源服务
 * 挂载路由
 * @type {*|createApplication}
 */
var express=require('express')
var fs=require('fs')
var app=express()
var router=require('./router')
/**
 * 配置的解析post表单数据
 * @type {Parsers|*}
 */
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('html',require('express-art-template'))
app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('./node_modules/'))
//把路由容器挂载到app服务中
app.use(router)
app.listen(3000,function () {
    console.log('running');
    
})
// console.log(router);