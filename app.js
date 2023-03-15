// import the express
let express=require("express");
// assignig the express to server veriable
let server=express();

// importing dotnet
let dotenv=require("dotenv");
dotenv.config({path:'./config/config.env'})
server.get("/",(req,res)=>{
    res.send("server is running");
})
server.listen(8000,(error)=>{
    console.log(error);
})
