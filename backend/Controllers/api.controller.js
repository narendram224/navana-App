
const Screen =  require('../models/screen');
module.exports.getAllData  = ((req,res)=>{
    res.send("new");
});
module.exports.PostScreen  = ((req,res)=>{
        let screen  = new Screen();
        screen.name= req.body.name;
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
