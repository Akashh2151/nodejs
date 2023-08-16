//os - module provides operating system-related utility methods and properties

const os = require('os')  //import os module


console.log("OS Platform: " + os.platform)

console.log("OS type: " + os.type())

console.log("OS release: " + os.release())

console.log("Total Memory (bytes): " + os.totalmem())

console.log("Free Memory (bytes): " + os.freemem())

console.log("CPU Architecture: " + os.arch())

console.log("Home directory",os.homedir())

console.log("Temap directory",os.tmpdir())