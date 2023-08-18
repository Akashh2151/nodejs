const express = require('express')
const path = require('path')
const app = express()
const PORT =3000;

//end points/routes 
//http method - get, post, put ets





//app.anyMethod(pathname,(req,res)=>{})
app.get('/',(req,res)=>{

    res.send("Welcome to root URL of server -get method")
})

app.post('/',(req,res)=>{

    res.send("Welcome to root URL of server -post method")
})

app.get('/hello',(req,res)=>{

    res.set('content-type', 'text/html');
    res.status(200)
    res.send("<h1>Hello world </h1>")
})



//how to send data to server
app.use(express.json())
app.post("/validateUser",(req,res)=>{
    console.log(req.body)
    const {userName,password} = req.body;  // from clint request object

    //db connection and fetch use and pass 
    if(userName ==="Ramesh" && password ==="ram123"){
        res.send("Login successFul....")
    }else{
        res.send("Invalid username or password..")
    }
})




//sending files from server
app.get('/getImage',(req,res)=>{
    res.send(path.join(__dirname,"images.png"))
})

app.listen(PORT,(error) => {
    if(!error){
        console.log("Server successfully listening on port 3000")
    }else{
        console.log("Error occured, Server cant start",error)
    }
})


