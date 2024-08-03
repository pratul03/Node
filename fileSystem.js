/**
 *2. Write a Node.js program that reads content from a file named "input.txt" and writes the content to a new file named "output.txt".
 */

const fs = require('fs');

const content = fs.readFileSync('input.txt')
console.log("Reading input file" + content);
fs.writeFileSync("output.txt", content)
console.log("file has been written");


