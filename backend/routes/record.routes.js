const router = require('express').Router();
const aws = require('aws-sdk');
const multer= require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({accessKeyId:"Aws access key",secretAccessKey:" aws secret key"});
const checkauth   = require('../middleware/checkauth');
const Record = require('../models/audio.model');
const Screen = require('../models/screen.model');

// const faker  =require('faker');
const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:'pujax',
        metadata:(req,file,cb)=>{
            cb(null,{fieldName:file.fieldname});
        },
        key:(req,file,cb)=>{
            cb(null,Date.now().toString());
        },
    })
});
router.route('/record')
    .get((req,res,next)=>{
        Record.find((err,products)=>{
                if (err) {
                    res.status(404).json({
                        message:"Data not found",
                        error:err,
                        success:false
                    })
                } else {
                        res.status(200).json({
                            success:true,
                            products
                        });
                }
        })
    })
    .post([upload.single('product_picture')],(req,res,next)=>{
            let record  =new Record();
           record.screenId=req.params.id;
            record.recordId = req.body.recordId;
                        record.englishNormal=req.body.englishNormal;
                record.englishSpeakable=req.body.englishSpeakable;
                record.hindiNormal=req.body.hindiNormal;
            record.hindiSpeakable=req.body.hindiSpeakable;
            record.kannadaNormal=req.body.kannadaNormal;
            record.kannadaSpeakable=req.body.kannadaSpeakable;
            record.oriyaNormal=req.bodyoriyaNormal;
            record.oriyaSpeakable=req.file.location;
            
            // res.send(req.body);
            record.save((err,product)=>{
                    if (err) {
                        res.status(404).json({
                                success:false,
                                message:"Record not upload",
                                error:err
                        }); 
                    } else {
                            res.status(200).json({
                                message:"Record upload succesfully",
                                success:true,
                                product
                            });
                    }
            });
    });
 router.get('/record/:id',(req,res)=>{
        console.log(req.params.id);
        Record.find({screenId:req.params.id},(err,obj)=>{
            if (err) {
                res.status(404).json({
                        success:false,
                        message:"Record not upload",
                        error:err
                }); 
            } else {
                    res.status(200).json({
                        message:"Record upload succesfully",
                        success:true,
                        obj
                    });
            }
        })
        
 })

 router.post('/my/:id',[upload.single('product_picture')],(req,res,next)=>{
    let record  =new Record();
   record.screenId=req.params.id;
    record.recordId = req.body.recordId;
                record.englishNormal=req.body.englishNormal;
        record.englishSpeakable=req.body.englishSpeakable;
        record.hindiNormal=req.body.hindiNormal;
    record.hindiSpeakable=req.body.hindiSpeakable;
    record.kannadaNormal=req.body.kannadaNormal;
    record.kannadaSpeakable=req.body.kannadaSpeakable;
    record.oriyaNormal=req.body.oriyaNormal;
    record.oriyaSpeakable=req.file.location;
    
    // res.send(req.body);
    record.save((err,product)=>{
            if (err) {
                res.status(404).json({
                        success:false,
                        message:"Data not upload",
                        error:err
                }); 
            } else {
                    res.status(200).json({
                        message:"Data upload succesfully",
                        success:true,
                        product
                    });
            }
    });
});
router.route('/screen')
    .get((req,res,next)=>{
        Screen.find((err,products)=>{
                if (err) {
                    res.status(404).json({
                        message:"Data not found",
                        error:err,
                        success:false
                    })
                } else {
                    Record.aggregate([
                        {"$group" : {_id:"$screenId", count:{$sum:1}}}
                    ],(err,cb)=>{
                        if (err) {
                            res.send(err)
                        } else {
                            res.status(200).json({
                                products,
                                count:cb
                            })
                        }
                    })
                     
                }
        })
    })
    .post((req,res,next)=>{
            let screen  =new Screen();
            screen.name = req.body.name;
        
            // res.send();
            screen.save((err,product)=>{
                    if (err) {
                        res.status(404).json({
                                success:false,
                                message:"Product not upload",
                                error:err
                        }); 
                    } else {
                            res.status(200).json({
                                message:"Product upload succesfully",
                                success:true,
                                product
                            });
                    }
            });
    });

    module.exports = router;
    