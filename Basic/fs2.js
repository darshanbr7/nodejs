// copying one file data to another file
let fs=require("fs");
fs.readFile("ex.txt","utf-8",(error,data)=>{
    fs.writeFile("ex1.t",data,(error)=>{
        try{
            console.log("successfully");
            if(error) throw error
        } catch(error){
            console.log(error.message)
        }
    })
})