let verifyheaders=async(req,res,next)=>{
   
    let token=req.headers.auth
    let path=req.originalUrl
    console.log(token)
    if (token!=null || path=='/login' || path=='/register'){

        console.log(path)
        next()
    }
    else{
        // get the path of the requested url
      
        res.send({
            error:'No token provided'
        })
    }
    
}


module.exports=verifyheaders;