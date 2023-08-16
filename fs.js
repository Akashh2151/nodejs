const fs = require('fs');

//writing to file
const contendToWrite ="CODEMIND TECHNOLOGY is a leading Training and Placement Academy, which is now expanding in more technical trainings and in software development. CodeMind is well known for its Quality Training & good placement track for fresher’s as well as working professional.";

fs.writeFile('example.txt',contendToWrite,(err)=>{
    if(err){
        console.error("Error writing to file",err)
    }else{
        console.log("File written successfully")
    }
})

//Reading the file
fs.readFile('module.txt','utf8',(err,data)=>{
    if(err){
        console.error("Error in Reading file",err)
    }else{
        console.log("File Content:",data)
    }
})

//file information
fs.stat("module.txt",(err,stat)=>{
    if(err){
        console.error("Error in Stat",err)
    }else{
        console.log("File size:",stat.size,"bytes")
        console.log("Is the file ?",stat.isFile())
        console.log("Is the Directory?",stat.isDirectory())
    }
})

//appending file information
const contendToAppend="Welcome to MERN OR MEAN stack development !!!"
fs.appendFile("module.txt",contendToAppend,(err)=>{
    if(err){
        console.error("Error in appending fil",err)
    }else{
        console.log("Contend appended successFully .." )
    }
})

//delete a file 
fs.unlink("example.txt",(err)=>{
    if(err){
        console.error("Error in deleting fil",err)
    }else{
        console.log("File deleted  successFully .." )
    }
})

//create directory
fs.mkdir("new-directory",(err)=>{
    if(err){
        console.error("Error in creating  directory",err)
    }else{
        console.log("directory created  successFully .." )
    }
})
