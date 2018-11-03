// 安装后引入express库
var app = require('express')(); 
// 将express注册到http中
var http = require('http').Server(app);

app.get('/',(req,res)=>{
    res.send('hello kolento')
})

http.listen(4000,()=>{
    console.log('listening on:4000')
})