const sequelize = require("../../helpers/sequelizer");
const ApiError = require('../../helpers/ApiError');
const bcrypt = require("bcrypt");

const user = require("../../models/userModel");

/*findAndValidate = async function (email, password) {
  const foundUser = await user.findAll({where: {email:email }});
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
}*/





const login = async (req, res) => {
  // login logic here
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        error: 'Please provie a username and password'
      })
    }
    else {
      await user.findOne({ where: {email:  email}}).then(
        async (foundUser) => {
          if (!foundUser) {
            return res.status(404).json({ emailnotfound: "Email not found" });
          }
          else{    
            await bcrypt.compare(password, foundUser.password).then(result1 => {
                if (result1) {
                  req.session.id = foundUser.id;
                  req.session.level = foundUser.level;
                  res.status(200).json({
                    status: "success",
                    message: "Logged in succesfully"
                  });
                } else {
                  res.status(401).json({
                    status: "error",
                    message: 'password does not match!'
                  });
                }
              }
            )
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
  req.session.first_name = null;
  req.session.level = null;
  // res.redirect();
  next();
};





module.exports = { login, logout };
