/*
// based on os
let os=require("os");
console.log(os.version())
console.log(os.hostname())
console.log(os.arch())
console.log(os.freemem())
console.log(os.totalmem()) */

/* file system module
let fs=require("fs");
//console.log(fs.readFileSync("p1.js","utf-8"))
console.log(fs.readFile("p1.js","utf-8",(error,data)=>{
    try{
        console.log(data);
        if(error) throw error;
    } catch(error){
        console.log(error.message)
    }
}))
console.log(fs.readFile("p1.js","utf-8",(error,data)=>{
    try{
        fs.writeFile("p1.txt",data,(error)=>{
        if(error) throw error;
        })
    } catch(error){
        console.log(error.message)
    }
})) */

/* bicript module */
/* let bc=require("bcrypt");
let user={
    name:"darshan",
    password:"11332"
}
 let new_password=bc.hashSync(user.password,10);
 user={...user,password:new_password}
 if(bc.compareSync("1332",user.password)){
    console.log("true")
 } else{
    console.log("false")
 } */

  
 /* http module   -- to create server */
 /* let http=require("http");
 
 let data=http.createServer((req,res)=>{
    res.end("server running successfully")
 }).listen(3000);  */

 /* jwt -json web token */
 let jwt=require("jsonwebtoken");
 let user={
    name:"darshan",
    email:"darshan@gmail.com"
 } 
 let token=jwt.sign(user,"Abcrd");;
 console.log(jwt.verify(token,"Abcrd"))
 let a;
 let a;