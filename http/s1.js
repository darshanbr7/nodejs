// for examole creating a server
   let http=require("http");
  let server=http.createServer((req,res)=>{
    res.end("server running succesfully !!!")
  });
  server.listen(3000,(error)=>{
    if(error) throw error;
    console.log("server Running")
  }) 