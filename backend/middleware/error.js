const ErrorHandler = require("../utils/errorhandler");

module.exports= (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";


  //Mongo Db Cast Id Error
   if(err.name === "CastError"){
     const messaage = `resource not found . invalid: ${err.path}`;
     err= new ErrorHandler(messaage,400);
   }
   //mingo dupilicate errorr

   if(err.code === 11000){
     const messaage = `duplicate ${object.keys(err.keyValue)} Entered`
     err = new ErrorHandler(message, 400);

   }

   // Wrong JWT error
   if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};