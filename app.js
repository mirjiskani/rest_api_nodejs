const express = require('express')
const users = require('./routes/users')
const products = require('./routes/product')
const {main} = require('./db_connect/db')
const cors = require('cors');

const app = express()
const port = 5000

main();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// Handling routes request
const corsOptions = {
  origin: 'http://localhost:4200', // Replace with your frontend's origin
};

app.use(cors(corsOptions));
app.use("/users",users)
app.use("/products",products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})