const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    // 响应一个页面
    // 不加_， dirname为绝对路径(完整路径)
    // __dirname为 相对路径 - 下划线数量为两个
    res.sendFile(__dirname + '/index.html');
});

// 返回用户数据
app.get('/data', (req, res) => {
  
     res.send('用户数据');
})

app.listen(9000,()=>{
    console.log('9000端口启动中……');
})