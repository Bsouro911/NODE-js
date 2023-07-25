// const clr = require("colors");
// console.log("souro".green);
// console.log("metasploit".bgRed);

// API created with static data
const http = require('http');
const core_data = require('./data')
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(core_data));
    res.end();
}).listen(80);
