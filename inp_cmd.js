// console.log(process.argv); // argv -> argument vectorS

const fs = require('fs');

const inp = process.argv;

// fs.writeFileSync(inp[2], inp[3]);
// fs.writeFileSync(inp[3], inp[2]);

if(inp[2]=='add'){
    fs.writeFileSync(inp[3], inp[4]);
}
else if(inp[2]=='remove'){
    fs.unlinkSync(inp[3], (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
    });
}
else{
    console.log("invalid input");
}