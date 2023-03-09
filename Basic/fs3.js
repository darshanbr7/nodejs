let fs=require("fs");
// console.log(fs.readFileSync("ex.txt","utf-8"))   --> using synchronously
let data=fs.readFile("ex.txt","utf-8",(error,data)=>{
    try{
        console.log(data);
        if(error) throw error;
    }catch(error){
        console.log(error.message)
    }
})
console.log(data)