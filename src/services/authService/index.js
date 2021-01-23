const sequelize = require("../../helpers/sequelizer");
const ApiError =require('../../helpers/ApiError');
const bcrypt=require("bcrypt");

const user = require("../../models/userModel");

/*findAndValidate = async function (email, password) {
  const foundUser = await user.findAll({where: {email:email }});
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
}*/





const login = async (req, res) => {
  // login logic here
  try {
    const {email, password } = req.body;
    if( !email || !password ){
        return res.status(400).json( {
           status:"error",
            error: 'Please provie a username and password'
        })
    }
    else {
         await user.findOne({where:{email:email}}).then(
           async (result)=>{
           
            
          
           if(result!=null){
            await bcrypt.compare(password,result.password).then(
              function(result1){
                if (result1){
                 req.session.id = result.id;
                 req.session.level = result.level;
                 res.status(200).json({
                   status:"success",
                   message:"Logged in succesfully"
                 });
                }else{
                 res.status(401).json({
                   status:"error",
                   message: 'password does not match!'
               });
                }
              }
            )
            
             
           }else{
             res.status(401).json({error:"Can't find such account"})
           }
            
            
                
            
                   
                
            })
          }
        
    }
          
  

 catch (error) {
    console.log(error);
}
};

const logout = async (req, res, next) => {
  // logout logic here
        req.session.user_id = null;
        req.session.first_name=null;
        req.session.level=null;
       // res.redirect();
        next();
       
};


const isPoliceLoggedIn = (req,res,next)=>{
  if (req.session.level == "2") {
    next();
  } else {
    res.status(401).json({message:"Only Police officers are allowed"});
  }

  
};

const isLoggedIn = (req,res,next)=>{
  if (req.session.level ) {
    next();
  } else {
    res.status(401).json({message:"Only Commmon people are allowed"});
  }
};

const isLawyerLoggedIn = (req,res,next)=>{
    if (req.session.level == "1") {
      next();
    } else {
      res.status(401).json({message:"Only Lawyers are allowed"});
    }
  };




module.exports = { login,logout,isPoliceLoggedIn,isLawyerLoggedIn,isLoggedIn };
