const router = require("express").Router();

const {
    getUsers,
    getUserById,
    createUser,
} = require("../services/user_services");
const {
    getWanteds,
    getWantedById,
    createWanted,
    updateWanted,
    deleteWanted,
} = require("../services/wanted_service");
const {
    getSuspects,
    getSuspectById,
    createSuspect,
    updateSuspect,
    deleteSuspect,
} = require("../services/suspect_service");
const {
    getComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
} = require("../services/complaint_service");


// ========= user is ok ======= //
router.post("/user", createUser, (req, res, next) => {
    res.json({ msg: "successfully registered" });
});

router.get("/user", getUsers, (req, res, next) => {
    res.json({ users: req.users });
});

router.get("/user/:id", getUserById, (req, res, next) => {
    res.json({ foundUser: req.userId });
});
// ========= user is ok ======= //


// ========= wanted is ok ======= //
router.get("/wanteds", getWanteds, (req, res, next) => {
    res.json({ wanteds: req.wanteds });
});
router.get("/wanteds/:id", getWantedById, (req, res, next) => {
    res.json({ foundWanted: req.foundWanted });
});
router.post("/wanteds", createWanted, (req, res, next) => {
    res.json({ msg: "Added wanted" });
});
router.put("/wanteds/:id", updateWanted, (req, res, next) => {
    res.json({ msg: "Edited wanted" });
});
router.delete("/wanteds/:id", deleteWanted, (req, res, next) => {
    res.json({ msg: "Deleted wanted" });
});
// ========= wanted is ok ======= //


// ========= suspects is ok ======= //
router.get("/suspects", getSuspects, (req, res, next) => {
    res.json({ suspects: req.suspects });
});
router.get("/suspects/:id", getSuspectById, (req, res, next) => {
    res.json({ foundSuspect: req.foundSuspect });
});
router.post("/suspects", createSuspect, (req, res, next) => {
    res.json({ msg: "Added suspect" });
});
router.put("/suspects/:id", updateSuspect, (req, res, next) => {
    res.json({ msg: "Edited wanted" });
});
router.delete("/suspects/:id", deleteSuspect, (req, res, next) => {
    res.json({ msg: "Deleted wanted" });
});
// ========= suspects is ok ======= //

// ========= complaints is ok ======= //
router.get("/complaints", getComplaints, (req, res, next) => {
    res.json({ complaints:req.complaints });
});
router.get("/complaints/:id", getComplaintById, (req, res, next) => {
    res.json({ foundComplaint:req.foundComplaint });
});
router.put("/complaints/:id", updateComplaint, (req, res, next) => {
    res.json({ msg: "edited complaint" });
});
router.delete("/complaints/:id", deleteComplaint, (req, res, next) => {
    res.json({ msg: "Deleted Complaints" });
});
// ========= complaints is ok ======= //


module.exports = router;