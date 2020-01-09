// 搭建一个简单的服务器
//核心模块 :http
//1.加载http核心模块
var http=require('http')
//2.使用http.createServer（）方法创建一个服务器，返回Server实例
var server=http.createServer()
//3.提供服务
//function接收两个参数 request response
server.on('request',function (request,response) {
    console.log(request.url);
    if(request.url.indexOf('login')!=-1){
        response.write('login')
        response.end()
    }else {
        // response.write('code')
        // response.write('cool')
        // response.end()
        response.end('code cool')
    }
    // //触发服务器的request
    // console.log('receive request now,and url is:'+request.url); //输出端口号后面的
    // //response可以write多从，但是一定要有end，不然客户端会一直等待
    // response.write('code')
    // response.write('cool')
    // response.end()
})
//绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('the server has operated,you can visit it by http://localhost:3000');
})
