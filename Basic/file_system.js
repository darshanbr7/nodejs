let fs=require("fs");
// readin a file synchronously
// let data=fs.readFileSync("ex.txt","utf-8")
// console.log(data)

// reding a file Asynchronously
// while reading file asynchronously we want to pass a one fat Arow function
/*in a callback function we pass two prameter   1-> error
                                                2-> data fetching from the file */
fs.readFile("ex.txt","utf-8",(newData,error)=>{
    console.log(newData)
    console.log(error)
})