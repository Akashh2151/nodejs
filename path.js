//path module provides utilities for working with file and directory paths

const path = require('path')
//Joining the path
const path1='myDir';
const path2="file.txt"

const fullPath = path.join(__dirname,path1,path2)
console.log("Joined path: " + fullPath)


//Getting the file extension

const filename ="example.html"

const extension =path.extname(filename)
console.log("File extension: " + extension)

const filePath ="/home/user/documents/report.pdf"
const basename = path.basename(filePath)
console.log("Basename: " + basename)

const dirname =path.dirname(filePath)
console.log("Directory Name: " + dirname)



