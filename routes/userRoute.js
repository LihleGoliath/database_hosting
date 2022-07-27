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

router.post("/",(req,res) => {
  const {
    email,
    password,
    full_name,
    billing_address,
    default_shipping_address,
    country,
    phone,
    user_type
  } = req.body
  try {
    con.query(`INSERT INTO users (email,password,full_name,billing_address,default_shipping_address,country,phone,user_type) value ('${email}','${password}','${full_name}', '${billing_address}' , '${default_shipping_address}','${country}','${phone}','${user_type}')`, (err, result) => {
        if (err) throw err;
        res.send(result)})
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id",(req,res) => {
  try {
    con.query("UPDATE users SET ", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
} catch (error) {
    console.log(error);
    res.status(400).send(error)
}
});
router.delete("/:id",(req,res)=> {
    if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Tutorial with id " + req.params.id
          });
        }
      } else res.send({ message: `Tutorial was deleted successfully!` });
    });


module.exports = router;