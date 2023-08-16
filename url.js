/*
    URL module : provides methods for working with URLs: 
    with this methods we can easily parse the different components of url(protocol,host,port,path,query parameters)
 */

const url = require('url')

//example url
const urlString ="https://www.example.com:8080/path/to/resource?params=value&params2=value&params3=value"

//paesing the  url
const parsedUrl =url.parse(urlString,true)
console.log(parsedUrl)

const parsedUrl1 =url.parse(urlString)
console.log(parsedUrl1)

//accessing the url components

console.log("Protocol: " + parsedUrl.protocol)
console.log("Host: " + parsedUrl.host)
console.log("Path: " + parsedUrl.path)
console.log(`Query Params: ${JSON.stringify(parsedUrl.query)}`)


//formating  the url 
 const formattedUrl = url.format({
    protocol:"https",
    host:'wwww.codemind.com',
    port:8080,
    pathname:"/path/to/resource",
    query:{
        param1:"value1",
        param2:"value2",
    }
 })

 console.log("Formatted URL: " + formattedUrl)