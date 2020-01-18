var express=require('express')
var app=express()
var bodyParser=require('body-parser')
app.use('/public/',express.static('./public/'))  //文件路径可以省略./
//配置art-template模板引擎
//第一个参数表示，当渲染以 .html 结尾的文件时，使用art-template模板引擎
//express-art-template是专门用来在Express中吧art-template整合到express中的
//因为express-art-template引来art-template，所以art-template也是必须安装的
app.engine('html',require('express-art-template'))
//express为 response相应对象提供了一个方法render
//render方法只有默认是不可以使用的，只有配置了模板引擎才可以使用
// res.render('n模板名',{模板数据}) 直接写名称不写路径，回去views目录下找



//只要进行下面的配置，req就会多出一个属性 body 就可以解析表单请求体数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]
app.get('/',function (req,res) {
          // res.send('/page')
    res.render('index.html',{
       comments:comments
    })
})
app.get('/post',function (req,res) {
    res.render('post.html')
})
app.get('/pinglun',function (req,res) {
    // res.render()
    console.log(req.query);//直接拿到请求路径中的参数对象
    var comment=req.query
    comment.dateTime='2019-1-16'
    comments.unshift(comment)
    res.redirect('/')
})
app.post('/post',function (req,res) {
     // console.log('post 请求');
    // 1.获取表单post请求体数据   req.query只能拿get请求参数
     console.log(req.body);
     var comment=req.body
    comment.dateTime='2019-1-16'
    comments.unshift(comment)
    res.redirect('/')

})
app.listen(3000,function () {
    console.log('running....');

})