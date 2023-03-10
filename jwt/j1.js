// importing the json 
let jwt=require("jsonwebtoken");

// creating the user object
let user={
    email:"darshan@gmail.com",
    password:"darshan123"
}

// creating payload
let payload={
    id:user.email
}
/* while creating a payload  we pass the users email as a id  */

// creating a serurityKey
let serurityKey="ABFKLG";
/* while creating serurityKey we passes a some elementts randomly */

// creating the token
let token=jwt.sign(payload,serurityKey);
/* while creating token we use the jwt.sign() method 
this method requires two parameter   1) payload
                                    2)  serurityKey

                                    in additionally we can add the expiretime also */

//console.log(token);  

// and verifing   using jwt.verify()
/* this tmethod requires 3 parameter  
                        1) TrackEvent,
                        2) securitykey
                        3) fat-Arrow function
                        fat Arrow function require 2 arguments 
                         1) error,
                         2) new payload */

  jwt.verify(token,serurityKey,(error,newPayload)=>{
    if(error) throw error;
    console.log(newPayload)
  })

