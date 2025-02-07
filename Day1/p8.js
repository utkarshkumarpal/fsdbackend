const fs = require('fs');

// console.log("Create a new directory");

fs.mkdir('MyFolder',{recursive: true},(err)=>{
    if (err){
        console.error("An error occurred: ",err);
        return;
    }
    console.log("Directory created successfully!");
});