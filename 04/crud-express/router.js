//放置路由的相关信息
var app=require('./app.js')
var fs=require('fs')
//express提供了一种更好的方式
var express=require('express')
var Student=require('./student')
// 1.创建一个路由容器
var router=express.Router()
// Student.updateById({
//     id:1,
//     name:'aa'
// },function (err) {
//      if (err){
//          return console.log('修改失败');
//      }
//      console.log('修改成功');
// })
//2.把路由都挂载到router路由容器中
    router.get('/students',function (req,res) {
        // res.send('helo')
        //加了utf8 就相当于data.tostring()
        // fs.readFile('./db.json', 'utf8', function (err, data) {
        //     if (err) {
        //         return res.status(500).send('server error.')
        //     }
        //     // console.log(typeof data.toString());//data.tostring()是字符串
        //     res.render('index.html', {
        //         fruits: [
        //             'aa',
        //             'bb',
        //             'cc'
        //         ],
        //         //将文件中读到的字符串转为对象，再去取里面的属性
        //         students: JSON.parse(data).students
        //     })
        // })
        Student.find(function (err,students) {
            if (err){
                return res.status(500).send('Server error.')
            }
            res.render('index.html',{
                fruits:[
                    'aa',
                    'bb',
                    'cc'
                ],
                students:students
            })
        })
    })
    router.get('/students/new',function (req,res) {
        res.render('new.html')
    })
    router.post('/students/new',function (req,res) {
       console.log(req.body);
        /**
         * 拿到数据
         * 将数据放在db.jsonz中进行持久化（先读取转为对象，再往对象中push，然后将对象转为字符串，再写入文件）
         * 发送响应
         */
     Student.save(req.body,function (err) {
         if (err){
             return res.status(500).send('server error')
         }
         res.redirect('/students')
     })

    })
    router.get('/students/edit',function (req,res) {
    //    先获取id
    //     console.log(req.query.id);
        Student.findById(parseInt(req.query.id),function (err,student) {
            if (err){
                return res.status(500).send('server error')
            }
            console.log(student)
            res.render('edit.html',{
                student:student
            })
        })

    })
/**
 * 处理编辑学生
 */
    router.post('/students/edit',function (req,res) {
        //获取表单数据  更新
        // console.log(req.body);
        Student.updateById(req.body,function (err) {
            if (err){
                return res.status(500).send('server error')
            }
            console.log(typeof req.body.id);//从表单传过来的都是字符串
            res.redirect("/students")
        })
    })
    router.get('/students/delete',function (req,res) {
         //删除学生数据
        //获取需要删除测id
        // console.log(req.query.id)
        // console.log(typeof  req.query.id); string
        Student.deleteById(req.query.id,function (err) {
             if (err){
                 return res.status(500).send("server error")
             }
             res.redirect("/students")
        })
    })
//3.把router导出
module.exports=router


