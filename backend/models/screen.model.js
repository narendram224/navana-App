const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ScreenSchema  = new Schema({
    name:String,
   
});

module.exports = mongoose.model('screen',ScreenSchema);