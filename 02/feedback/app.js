//application 应用程序
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
var http=require('http')
var fs=require('fs')
var template=require('art-template')
var url=require('url')
//http模块可以简写成一下的方式
var comments=[
    {
        name:'zhangsan',
        message:'good day',
        dateTime:'2019-1-9'
    },
    {
        name:'zhangsan',
        message:'good day',
        dateTime:'2019-1-9'
    },
    {
        name:'zhangsan',
        message:'good day',
        dateTime:'2019-1-9'
    },
    {
        name:'zhangsan',
        message:'good day',
        dateTime:'2019-1-9'
    },
    {
        name:'zhangsan',
        message:'good day',
        dateTime:'2019-1-9'
    }
]
http
    .createServer(function (req,res) {
        var url=require('url')
       // console.log('hello');
        // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
        var parseObj=url.parse(req.url,true)
        // var url=req.url
        var pathname=parseObj.pathname //单独获取不包含查询字符串的路径部分，不包含问号之后的内容
        if (pathname=='/'){
          fs.readFile('./views/index.html',function (err,data) {
             if(err){
                return res.end('404 not Found')
             }
             // console.log(data) //打印的二进制数据
            var htmlStr=template.render(data.toString(),{
                comments:comments
            })
             res.end(htmlStr)  //响应不会显示二进制数据
          })
        }else if(pathname==='/pinglun'){
        //        这个时候无论/pinglun之后是什么都可以进来
        //     console.log('收到表单请求了',parseObj.query);
            // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
            // 所以接下来要做的就是：
            //    1. 获取表单提交的数据 parseObj.query
            //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
            //    3. 让用户重定向跳转到首页 /
            //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了
            // res.setHeader('Content-Type','text/plain;charset=utf-8')
            // res.end(JSON.stringify(parseObj.query))
               var comment=parseObj.query
            comment.dateTime='2019-1-11'
            // comments.push(comment)//往后放
            comments.unshift(comment)//往前方
            // 如何通过服务器让客户端重定向？
            //    1. 状态码设置为 302 临时重定向
            //        statusCode
            //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
            //        setHeader
            // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
            // 所以你就能看到客户端自动跳转了
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        }else if(pathname==='/post'){
            fs.readFile('./views/post.html',function (err,data) {
                 if(err){
                     return res.end('404 not Found')
                 }
                 res.end(data)
            })
        }else if(pathname.indexOf('/public/')===0){
            // /public/css/main.css
            // /public/js/main.js
            // /public/lib/jquery.js
            // 统一处理：
            //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
            //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
            console.log(pathname);
             fs.readFile('.'+pathname,function (err,data) {
                 if (err){
                     return res.end('404 not Found')
                 }
                 res.end(data)
             })
        }else {
            fs.readFile('./views/404.html',function (err,data) {
                 if(err){
                     return res.end('404 not Found')
                 }
                 res.end(data)
            })
        }
})
            .listen(3000,function () {
           console.log('running...')
            })