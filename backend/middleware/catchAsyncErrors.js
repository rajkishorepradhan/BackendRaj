module.exports = theFunc =>(req,res,nest) =>{
    Promise.resolve(theFunc(req,res,next)).catch(next);
}