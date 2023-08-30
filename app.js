const express = require('express')
const users = require('./routes/users')
const products = require('./routes/product')
const mongoose = require('mongoose');
const app = express()
const port = 3000

const main = async ()=>{
      mongoose.connect('mongodb://127.0.0.1:27017/rest_api').then(()=>{
        console.log("connected");
      }).catch((error)=>{
        console.log(error);
      });
}

main();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// Handling routes request
app.use("/users",users)
app.use("/products",products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})