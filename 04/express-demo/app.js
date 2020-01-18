//入口文件
//1.引包
var express=require('express')
//2.创建你的服务器应用程序
      //就是原来的http.createServer
var app=express()
//公开指定目录（之前是通过路径判断，然后进行读取文件的操作）
//只要这样做了，你就可以直接通过/public/xx的方式访问public 目录中的所有资源
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./static/'))
//可以这样分开操作，不像之前的需要进行路径的判断
app.get('/',function (req,res) {
    console.log(req.query);
    // console.log(req.url);
     res.send(`
       <h1>aaaaa</h1>
     
     `)
})
app.get('/aa',function (req,res) {
    // console.log(req.url);
    res.send('hello express aa')

})
app.listen(3000,function () {
    console.log('app is running at port 3000');
})

