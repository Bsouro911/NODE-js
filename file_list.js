const fs = require('fs');
const path = require('path');

const dir_path = path.join(__dirname, `fileCreate`);

for(let i = 0; i < 5; i++){
    fs.writeFileSync(`${dir_path}/file${i}.txt`, `A simple text file no.${i}`);
}

// fs.readdir(dir_path,(err, files)=>{
//     console.log(files);
// })

fs.readdir(dir_path,(err, files)=>{
    files.forEach(element => {
        console.log(element);
    });;
})

