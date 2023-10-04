const mongoose = require('mongoose');
const main = async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/rest_api').then(()=>{
      console.log("connected");
    }).catch((error)=>{
      console.log(error);
    });
}
module.exports = {main};