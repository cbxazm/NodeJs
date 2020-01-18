//对文件的操作进行封装
//只处理数据，不关心业务
var fs=require('fs')
var dbPath='./db.json'
/**
 * 获取所有学生列表
 */
exports.find=function (callabck) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        // JSON.parse(data).students  //将字符串转为对象
        if (err){
            return callabck(err)
        }
        callabck(null,JSON.parse(data).students)
    })
}
/**
 * 添加保存学生
 */
exports.save=function (student,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err)
        }
        var students=JSON.parse(data).students
        //处理id唯一的问题
        student.id=students[students.length-1].id+1
          students.push(student)
        var fileData=JSON.stringify({
            //对象转json
             students:students
        })
        fs.writeFile(dbPath,fileData,function (err) {
            if (err){
                return callback(err)
            }
            callback(null)
        })
    })
}
/**
 * 更新学生
 */
exports.updateById=function (student,callback) {
      fs.readFile(dbPath,function (err,data) {
           if (err){
               return callback(err)
           }
         var students=JSON.parse(data).students
          //把id统一转换成数字类型
          student.id=parseInt(student.id)
      //    修改谁就把谁找出来
      //     find  es6中语法，需要接受一个函数作为参数,满足条件就会返回该item（返回true即为该item）
          var stu=students.find(function (item) {
              return item.id==student.id
          })
          for(var key in student){
               //在遍历里面 去对象的时候用 对象[属性] 才能取值
               stu[key]=student[key]
          }
          //把对象数据转为字符串
          var fileData=JSON.stringify({
              students:students
          })
          //把字符串保存到文件中
          fs.writeFile(dbPath,fileData,function (err) {
              if (err){
                  return callback(err)
              }
              callback(null)
          })
      })
    
}
    /**
     * 删除学生
     */
    exports.deleteById=function (id,callback) {
              fs.readFile(dbPath,'utf8',function (err,data) {
                  if (err){
                      return callback(err)
                  }
                  var students=JSON.parse(data).students
                   //es6新方法  findIndex(找下标)  与find（找对象） 对此
                   var deleteId=students.findIndex(function (item) {
                       return item.id==id
                   })
                  students.splice(deleteId,1) //从该下标开始删除一个元素
                  //把对象数据传唤为字符串
                  var fileData=JSON.stringify({
                      students:students
                  })
                  //把字符串保存到文件中
                  fs.writeFile(dbPath,fileData,function (err) {
                      if(err){
                          return callback(err)
                      }
                      callback(null)
                  })
              })

    }
/**
 *   根据id获取单个学生对象
 */
      exports.findById=function (id,callback) {
          fs.readFile(dbPath,'utf8',function (err,data) {
                if (err){
                    return callback(err)
                }
                var students=JSON.parse(data).students
              console.log(students);
              var ret=students.find(function (item) {
                   return item.id==id
              })
                callback(null,ret)
          })
          
      }
     