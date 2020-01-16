const mongoose = require('mongoose');
const db   = 'mongodb://shubh:shubh224@ds361968.mlab.com:61968/navana'
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if (!err) console.log("Database successfully connected!!!");
    else console.log("Db not conncted",err);
});
module.exports  = mongoose;