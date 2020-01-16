const router = require('express').Router();

router.post('/local',(req,res)=>{
        
        res.send(req.body);
});

module.exports  = router;
