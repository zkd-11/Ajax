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
        name : 'hanjue'
    };

    // 对 对象进行 字符串转化
    let str = JSON.stringify(data);

    res.send(str);
})

//为ie做的优化
app.get('/ie', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // 设置响应
    res.send('hello IE2');
})

// 网络延时响应
app.all('/delay', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');  
    // 设置响应
    setTimeout(function(){
        res.send('hello deleay');
    },3000)    
})


// jQuery 请求
app.all('/jquery-server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');  
    // 设置响应
//    res.send('hello jquery');

    const jn = {name: '韩绝'};
    // 将json对象转化为 字符串
    res.send(JSON.stringify(jn));
})

// jQuery 请求
app.all('/jquery-ordinary', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', '*');  
    // 设置响应
//    res.send('hello jquery');

    const jn = {name: '韩绝'};
    // 将json对象转化为 字符串
    res.send(JSON.stringify(jn));
})

// axios 请求
app.all('/axios-server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', '*');  
    // 设置响应
//    res.send('hello jquery');

    const jn = {name: '韩绝'};
    // 将json对象转化为 字符串
    res.send(JSON.stringify(jn));
})

// fetch服务
app.all('/fetch-server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', '*');  

    const jn = {name: '韩绝'};
    // 将json对象转化为 字符串
    res.send(JSON.stringify(jn));
})


// JSONp 服务
app.all('/jsonp-server', (req, res) => {
 
    const data = {
        name:'韩绝'
    }
    let str = JSON.stringify(data);
    // 返回结果
    res.end(`handle(${str})`);
})

// jsonp 实践
app.all('/check-username', (req, res) => {
 
    const data = {
        exist:1,
        msg:'用户名已存在',
    };
    let str = JSON.stringify(data);
    // 返回结果
    res.end(`handle(${str})`);
})


// jquery - jsonp 
app.all('/jquery-jsonp-server', (req, res) => {
 
    const data = {
      name:'悟律',
      city:['北京','上海', '深圳']
    };
    let str = JSON.stringify(data);
    // 接受callback参数
    let cb = req.query.callback;
    // 返回结果
    res.end(`${cb}(${str})`);
})

// cors - server

// jQuery 请求
app.all('/cors-server', (req, res) => {
    //设置响应头， 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');  
    res.setHeader('Access-Control-Allow-Methods', 'post');
    // 设置响应
   res.send('hello cors');
})

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务已经启动， 8000端口启动中……');
})
