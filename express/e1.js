let express=require("express");
let server=express();
server.get("/",(req,res)=>{
  res.send("server is running");
})
server.listen(8000,(err)=>{
    if(err)throw err;
    console.log("server is running successfullynode ")
})