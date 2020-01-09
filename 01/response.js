var http=require('http')
var fs=require('fs')
var server=http.createServer()
server.on('request',function (resquest,response) {
    var url=resquest.url
    if (url=="/"){
        fs.readFile('./resources/index.html',function (error,data) {
            if(error){
                response.setHeader('Content-Type','text/plain;charset=utf-8')
                response.end("文件读取失败")
            }else {
                //data是二进制数据，可以toString转换 但是response.end()接收两种数据，字符串和二进制数据
                response.setHeader('Content-Type','text/html;charset=utf-8')
                response.end(data)
            }
        })
    } else if(url=='/lanxiong'){
        fs.readFile('./resources/lanxiong.jpg',function (error,data) {
            if(error){
                response.setHeader('Content-Type','text/plain;charset=utf-8')
                response.end("文件读取失败")
            }else {
                //data是二进制数据，可以toString转换 但是response.end()接收两种数据，字符串和二进制数据
                response.setHeader('Content-Type','image/jpeg')//图片不需要指定编码
                response.end(data)
            }
        })
    }
})
server.listen(3000,function () {
    console.log('server is running..');
})