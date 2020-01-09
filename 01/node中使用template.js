var template=require('art-template')
 // var tplStr=`
 //             <!DOCTYPE html>
 //            <html lang="en">
 //            <head>
 //                <meta charset="UTF-8">
 //                <title>Title</title>
 //            </head>
 //            <body>
 //                 <!--在浏览器中使用需要引入 lib/template-web.js
 //                   模板引擎不关心你的字符串内容，只关心自己认识的模板标记语法，如：{{}}}
 //                 -->
 //                 <script src="node_modules/art-template/lib/template-web.js">
 //                 </script>
 //                 <script type="text/template" id="tp1">
 //                     hello {{name}}
 //                      code   {{cool}}
 //                 </script>
 //            </body>
 //            </html>
 // `
                var fs=require('fs')
                fs.readFile('./浏览器使用模板引擎.html',function (err,data) {
                      if (err){
                          return console.log('读取文件失败');
                      }
                      //默认读取的是data的二进制数据
                       // 模板引擎需要的是字符串
                    var ret=template.render(data.toString(),{
                        name:'cc',
                        cool:'cool'
                    })
                  console.log(ret);
                })

// var ret=template.render(tplStr,{
//     name:'cc',
//     cool:'cool'
// })
// console.log(ret);