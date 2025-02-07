const fs = require('fs');
const data="New file Async";
fs.writeFile("./data.txt","utf8",(err,data)=>{
    if (err){
        console.log("Error reading file",err);
        return;
    }
    else{
        console.log("File Written Successfully");
    }
    
    
});