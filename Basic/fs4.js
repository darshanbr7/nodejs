let fs=require("fs");
// console.log(fs.readFileSync("ex.txt","utf-8"))   --> using synchronously
let data=fs.readFile("ex.tx","utf-8",(error,data)=>{
     try{
        fs.writeFile("ex2.txt",data,(error)=>{
          if(error) throw error;
        })
     } catch (error){
        console.log(error.message)
     }
})
