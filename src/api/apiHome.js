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
    logout,
    createAccount
} = require("../services/authService");



// ========= user is ok ======= //
router.post("/login", login, async(req, res) => {
    res.json("OK");
});

router.post('/register', createAccount, async(req, res) => {
    res.json({ msg : "Success" });
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