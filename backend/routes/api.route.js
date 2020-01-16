          const DbConnetion  =require('../DbConnection/dbConnetion');
const router = require('express').Router();
const Apicontroler = require('../Controllers/api.controller');

// routes
router.get('/',(req,res)=>{
        res.status(200).json({message:"succesfully "});
});
router.get('/screen',Apicontroler.getAllData);
router.post('/screen',Apicontroler.PostScreen);



const aws = require('aws-sdk');
const multer= require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({accessKeyId:"Aws access key",secretAccessKey:"aws secret key"});

const Records = require('../models/audio.model');
const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:'pujax',
        metadata:(req,file,cb)=>{
            cb(null,{fieldName:file.name});
        },
        key:(req,file,cb)=>{
            cb(null,Date.now().toString());
        },
    })
})

router.route('/products')
    .get((req,res,next)=>{
        Product.find((err,products)=>{
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
    .post([upload.single('englishSpeakable')],(req,res,next)=>{
        
             let record  =new Records();
            record.screenId = req.body.screenId;
            record.recordId = req.body.recordId;
            record.englishNormal = req.body.englishNormal;
            record.englishSpeakable = req.files.englishSpeakable;
            record.hindiNormal = req.body.hindiNormal;
            record.hindiSpeakable = req.files.hindiSpeakable;
            record.kannadaNormal = req.body.kannadaNormal;
            record.kannadaSpeakable = req.files.kannadaSpeakable;
            record.oriyaNormal = req.body.oriyaNormal;
            record.oriyaSpeakable = req.file.location;
                console.log(record);
                res.send(req.body);

            record.save((err,product)=>{
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