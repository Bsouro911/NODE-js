const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'Curd_OPs');
const filePath = `${dirPath}/apple.txt`;

// writing in the file
fs.writeFileSync(filePath,'this is a simple file');

// reading the file
fs.readFile(filePath,'utf8',(err,item)=>{
console.log(item);
})

// appending data in file
fs.appendFile(filePath,' for fruits',(err)=>{
if(!err) console.log("file is updated")
})

// rename the file name
fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})

// deleting the file
// const delFpath = `${dirPath}/fruit.txt`;

// try {
//     fs.unlinkSync(delFpath);
//     console.log('File deleted successfully.');
//   } catch (err) {
//     console.error('Error deleting file:', err);
//   }