// 搭建一个简单的服务器
//核心模块 :http
//1.加载http核心模块
var http=require('http')
//2.使用http.createServer（）方法创建一个服务器，返回Server实例
var server=http.createServer()
//3.提供服务
server.on('request',function () {
    //触发服务器的request
    console.log('receive request now');
})
//绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('the server has operated,you can visit it by port 3000');
})