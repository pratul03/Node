const path = require('path')
const dirName = path.dirname("/users/joe/documents/file.txt");
console.log("Directory Name:", dirName);
const extName = path.extname("/users/joe/documents/file.txt");
console.log("Extension Name:", extName);