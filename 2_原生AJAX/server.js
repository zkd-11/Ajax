const express = require('express');


// 创建应用对象();
const app = express();

//创建应用规则
/* 
    request 对请求报文的封装
    response 对响应报文的封装
*/
app.get('/server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // 设置响应
    res.send('hello AJax_get');
})

app.post('/server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // 设置响应
    res.send('hello AJax_post');
})

app.all('/json-server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
     res.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应

    //响应一个数据
    const data ={
        name : 'HanJue'
    };

    // 对 对象进行 字符串转化
    let str = JSON.stringify(data);

    res.send(str);
})

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务已经启动， 8000端口启动中……');
})
