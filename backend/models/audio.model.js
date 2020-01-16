const mongoose = require('mongoose');
const RecordSchema  = mongoose.Schema({
    screenId : {type:mongoose.Schema.Types.ObjectId,ref:'screen'},
    recordId: {type:String},
   englishNormal:{type:String},
   englishSpeakable:{type:String}
//    hindiNormal:{type:String},
//    hindiSpeakable:{type:String},
//    kannadaNormal:{type:String},
//    kannadaSpeakable:{type:String},
//    oriyaNormal:{type:String},
//    oriyaSpeakable:{type:String},
});

module.exports = mongoose.model('records',RecordSchema);