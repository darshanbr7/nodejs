//import os from "os"   // ES6
   /* importing the os file to the page 
  but our node module con't recognize the Es6 codes 
  thats why we write a code in Es5 */

  // alternative is
  let os=require("os");   //es5 code 
  // ex finding the operaing system using node
  console.log(os.platform())
  // finding total storage usig os
  console.log(os.totalmem())
  // finding free memeory using os
  console.log(os.freemem())
  console.log(os.hostname())  // host name
  console.log(os.release())   // relese version
  console.log(os.type())    // type of operating system
  console.log(os.userInfo())   // it provide the userinformatiin about system
  console.log(os.version())    // relesing vresion
  console.log(os.arch())       // architecture of the system

