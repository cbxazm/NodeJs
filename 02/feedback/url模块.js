var url=require('url')
var obj=url.parse('/pinglun?name=张就弄加速度&message=精雕机哦大大',true) //再加上第二个参数true，
console.log(obj);
console.log(obj.query);
