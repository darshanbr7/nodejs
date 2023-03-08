let fs=require("fs");
fs.readFile("ex.txt1","utf-8",(error,data)=>{
    try{
        if(error)throw error
    console.log(data)
    } catch(error){
        console.log(error)
    }
})