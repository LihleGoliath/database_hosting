const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM users", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.get("/:id", (req, res) => {
  try {
      con.query(`SELECT * FROM users WHERE user_id = '${req.params.id}}'`, (err, result) => {
          if (err) throw err;
          res.send(result);
      });
  } catch (error) {
      console.log(error);
      res.status(400).send(error)
  }
});

router.post("/",(req,res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
    full_name: req.body.full_name,
    billing_address: req.body.billing_address,
    default_shipping_address: req.body.default_shipping_address,
    country: req.body.country,
    phone: req.body.phone,
    user_type: req.body.user_type
  } 
  try {
    let sql = "INSERT INTO users SET ?"
    con.query(sql, user
      , (err, result) => {
        if (err) throw err.message;
        res.send(result)})
  } catch (error) {
    res.send(error)
    // console.log(error);
  }
});

router.patch("/",(req,res)=>{
  const {
     email,
     password
  } = req.body
  try {
   
    con.query(`SELECT * FROM users WHERE email="${email}" and password = "${password}"`,(err,result) => {
        if (err) throw err;
        res.send(result);
    });
} catch (error) {
    console.log(error);
    res.status(400).send(console.log(error))
}
})

router.put("/:id",(req,res) => {
  const {
        email,
        password,
        full_name,
        billing_address,
        default_shipping_address,
        country,
        phone
  }=req.body

try {
   
   
    con.query(`UPDATE users SET  
    email ="${email}",
    password ="${password}",
    full_name ="${full_name}",
    billing_address ="${billing_address}",
    default_shipping_address ="${default_shipping_address}",
    country="${country}",
    phone ="${phone}"
    WHERE user_id ="${req.params.id}"
    
    
    `, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
} catch (error) {
  console.log(error);
  res.status(400).send(error)
}
});


router.delete("/:id",(req,res)=> {
  try {
    con.query(`DELETE  FROM users WHERE user_id='${req.params.id}'`, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
} catch (error) {
    console.log(error);
    res.status(400).send(error)
}
    });


module.exports = router;