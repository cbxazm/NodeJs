//响应数据只能是字符串或者二进制数据
var http=require('http')
//创建server
var server=http.createServer();
//监听request事件,设置请求处理函数
server.on('request',function (request,response) {
    console.log('receive the url:'+request.url)
    // response.write('coding')
    // response.end()
    // response.end('coding')
    var url=request.url
    if(url=='/products'){
        var products=[
            {name:'zhangsan',age:15},
            {name:'lisi',age:15}
        ]
        //响应的数据只能是字符串或者二进制数据
        //JSON.parse ==>从字符串中提取一个json数据
        //JSON.stringfy ==>从json中提取一个字符串
        response.end(JSON.stringify(products))
    }
})
//绑定端口启动服务
server.listen(3000,function () {
    console.log('server has operating');

})