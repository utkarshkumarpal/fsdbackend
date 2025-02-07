const fs = require('fs');

const data = "Append to latest";

fs.appendFile("./data.txt",data,(err)=>{
    if (err) throw err;
    console.log("Data append to file!");

});