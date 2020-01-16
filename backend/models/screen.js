const mongoose = require('mongoose');
const ScreenSchema  = mongoose.Schema({
    name: {type:String},
});

module.exports = mongoose.model('screen',ScreenSchema);