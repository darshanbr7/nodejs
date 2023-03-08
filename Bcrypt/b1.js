let details={
    name:"darshan",
    age:21,
    email:"darshanbr" ,
    password:"darshanbr2001"
}
const bc=require("bcrypt");
// bcrypting the password  usig hashsync method   
// it require 2 parameter
 // 1-> what we want to bcrypt
//   2-> salt code 
let newPassword=bc.hashSync(details.password,13);
console.log(newPassword)

// updating using tripledot (...) operator
details={...details,password:newPassword};
 console.log(details)

 // comparision  using copparesync method
 if(bc.compareSync("darshanr2001",details.password)){
    console.log("login sucesssfull")
 }else{
    console.log("login fail")
 }