const router = require("express").Router();
const { getSuspects, getSuspectById } = require("../services/suspect_service");
const  auth  = require("../services/authService");
const {
  
  getArticles,
  getLaws,
  getLawById,
  getEmergency
} = require("../services/law_service");

router.post("/login", auth.login,(req, res, next) => {
  //res.send(req.arr);
  next();
});

router.post('/register', (req, res) => {
  const { email,password } = req.body;
  
  if ( !email || !password ) {
    res.send("Please enter all fields");
  }
  

  if (password.length < 6) {
     res.send('Password must be at least 6 characters');
  }

 
  else {
    user.findAll({ email: email }).then(user => {
      if (user) {
        
        res.send('Email Already exist');
          
      } else {
        
        const nic = req.body.nic,
              f_n = req.body.first_name,
              l_n= req.body.last_name,
              email=req.body.email,
              password=req.body.password,
              mob=req.body.mobile,
              level=req.body.level;
     
  // Create a new user and save to DB 
        const newUser =new user.build({
          nic:nic,
          fullname:f_n,
          last_name:l_n,
          email:email,
          password:password,
          mobile:mob,
          level:level,
          created_on:Date.now(),
          status:0
        }); 
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                
                //res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });


}
    
  
});
  }
  });




router.get("/", getArticles, (req, res, next) => {
  res.send(req.arr);
});

router.get("/laws", getLaws, (req, res, next) => {
  res.send(req.arr);
});
router.get("/laws/:id", getLawById, (req, res, next) => {
  res.send(req.arr);
});

router.get("/suspects", getSuspects, (req, res, next) => {
  res.send(req.arr);
});
router.get("/suspects/:id", getSuspectById, (req, res, next) => {
  res.send(req.arr);
});

router.get("/emergency", getEmergency, (req, res, next) => {
  res.send(req.arr);
});

module.exports = router;
