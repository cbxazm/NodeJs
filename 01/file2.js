//写文件
var rs=require('fs')
/**
 * 第一个参数path
 * 二 可选
 * 三 data
 * 四 callback
 * function 只有一个参数
 */
rs.writeFile('./write.md','please write sth',function (error) {
    console.log(error)
})