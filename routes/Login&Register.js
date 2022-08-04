const jwt = require("jsonwebtoken");
const con = require("../lib/db_connection");
require("dotenv").config

   async function Login  (req,res){
   const user ={
    email:req.body.email
   }
   try {
    let sql = "SELECT * FROM users WHERE email =  "
    con.query(

    )
   } catch (error) {
    
   }

}