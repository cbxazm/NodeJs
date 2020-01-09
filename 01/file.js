// console.log('aa');
//fs是file-system的简写，就是文件系统
//Nodejs对文件操作，就必须引入fs模块
//使用require方法加载fs核心模块（node的api浏览器不认识）
var fs=require('fs')
//读取文件
/**
 * 参数一 path
 * 参数二可选
 * 参数三 callback
 * 读取失败 error错误对象 data null  读取成功 error null data数据
 */
fs.readFile('./test.txt',function (error,data) {
    //  console.log(error)  ; //null
    // console.log(data); //<Buffer 61 62 63 64 65 66> 十六进制表达方式
    // console.log(data.toString());
    console.log(data);
    if(error){
        console.log('读取文件失败');
    }else {
        console.log(data.toString());
    }
})