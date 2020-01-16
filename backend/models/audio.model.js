const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecordSchema  = new Schema({
    screenId:{type:Schema.Types.ObjectId,ref:'screen'},
    recordId:String,
    englishNormal:String,
    englishSpeakable:String,
    hindiNormal:String,
   hindiSpeakable:String,
   hindiNormal:String,
   hindiSpeakable:String,
   kannadaNormal:String,
   kannadaSpeakable:String,
   oriyaNormal:String,
   oriyaSpeakable:String
});

module.exports = mongoose.model('record',RecordSchema);