const fs = require('fs');

const data = "New Data File";

fs.writeFileSync("data.txt",data);