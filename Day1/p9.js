//will delete a folder if tis empty, do unlink then run the below code for deleteing MyFolder

const fs = require('fs');

fs.rmdir('./MyFolder',(err)=>{
    if(err) throw err;
    console.log('Folder deleted successfully');
})