const router = require("express").Router();
const user = require("../models/userModel");
const bcrypt = require("bcrypt");

const {
    getArticles,
    getLaws,
    getLawById,
    getEmergency

} = require("../services/law_service");
const {
    getSuspects,
    getSuspectById
} = require("../services/suspect_service");
const {
    login, 
    logout
} = require("../services/authService");


// ========= user is ok ======= //
router.post("/login", login, async(req, res) => {
    res.json("OK");
});

router.post('/register', async(req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.json({ message: "Please enter all fields" });
    }


    if (password.length < 6) {
        res.json({ message: 'Password must be at least 6 characters' });
    } else {
        const newUser = await user.findAll({ where: { email: email } });

        if (newUser.length > 0) {

            return res.json({
                status: "error",
                error: "email already exist"
            });

        } else {

            const nic = req.body.nic,
                f_n = req.body.first_name,
                l_n = req.body.last_name,
                email = req.body.email,
                password = req.body.password,
                mob = req.body.mobile,
                level = req.body.level;


            // Create a new user and save to DB 
            const newUser = await user.build({
                nic: nic,
                first_name: f_n,
                last_name: l_n,
                email: email,
                password: password,
                mobile: mob,
                level: level,
                created_on: Date.now(),
                status: 0
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err){
                        console.log(err);
                    }
                    else{                    
                        newUser.password = hash;
                        res.status(200).json({
                                status: "success",
                                message: "Successfully added "
                        });
                    }                        
                });                        
            });
        }
    }
});



router.get("/", getArticles, (req, res, next) => {
    res.send(req.arr);
});
router.get("/laws", getLaws, (req, res, next) => {
    res.json({ laws: req.laws });
});
router.get("/laws/:id", getLawById, (req, res, next) => {
    res.json({ foundLaw: req.foundLaw });
});
router.get("/suspects", getSuspects, (req, res, next) => {
    res.json({ suspects: req.suspects });
});
router.get("/suspects/:id", getSuspectById, (req, res, next) => {
    res.json({ foundSuspect: req.foundSuspect });
});
router.get("/emergency", getEmergency, (req, res, next) => {
    res.send(req.arr);
});

module.exports = router;