const express = require('express');

const app = express();

// 创建应用对象();

//创建应用规则
app.get('/', (req, res) => {
    // 设置响应
    res.send('hello express');
})

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务已经启动， 8000端口启动中');
})
