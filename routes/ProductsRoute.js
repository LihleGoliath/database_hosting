const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM products", (err, result) => {
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
      con.query(`SELECT * FROM products WHERE product_id = '${req.params.id}}'`, (err, result) => {
          if (err) throw err;
          res.send(result);
      });
  } catch (error) {
      console.log(error);
      res.status(400).send(error)
  }
});

router.post("/",(req,res) => {
  const product = {
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price,
    weight: req.body.weight,
    descriptions: req.body.descriptions,
    thumbnail: req.body.thumbnail,
    image: req.body.image,
    category: req.body.category,
    create_date:req.body.create_date,
    stock:req.body.stock
  } 
  try {
    let sql = "INSERT INTO products SET ?"
    con.query(sql, product
      , (err, result) => {
        if (err) throw err.message;
        res.send(result)})
  } catch (error) {
    res.send(error)
    // console.log(error);
  }
});

// router.patch("/",(req,res)=>{
//   const {
//      sku,
//      name
//   } = req.body
//   try {
   
//     con.query(`SELECT * FROM products WHERE sku="${sku}" and name = "${name}"`,(err,result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// } catch (error) {
//     console.log(error);
//     res.status(400).send(console.log(error))
// }
// })

router.put("/:id",(req,res) => {
  const {
        sku,
        name,
        price,
        weight,
        descriptions,
        thumbnail,
        image,
        category,
        create_date,
        stock
  }=req.body

try {
   
   
    con.query(`UPDATE products SET  
    sku ="${sku}",
    name ="${name}",
    price ="${price}",
    weight ="${weight}",
    descriptions ="${descriptions}",
    thumbnail="${thumbnail}",
    image ="${image}",
    category ="${category}",
    create_date ="${create_date}",
    stock ="${stock}"
    WHERE product_id ="${req.params.id}"
    
    
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
    con.query(`DELETE  FROM products WHERE product_id='${req.params.id}'`, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
} catch (error) {
    console.log(error);
    res.status(400).send(error)
}
    });


module.exports = router;