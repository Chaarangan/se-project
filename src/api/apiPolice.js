const router = require("express").Router();
const auth = require("../services/authService");

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
router.post("/user", auth.isPoliceLoggedIn, createUser, (req, res, next) => {
    res.json({ msg: "successfully registered" });
});

router.get("/user", auth.isPoliceLoggedIn, getUsers, (req, res, next) => {
    res.json({ users: req.users });
});

router.get("/user/:id", auth.isPoliceLoggedIn, getUserById, (req, res, next) => {
    res.json({ foundUser: req.userId });
});
// ========= user is ok ======= //


// ========= wanted is ok ======= //
router.get("/wanteds", auth.isPoliceLoggedIn, getWanteds, (req, res, next) => {
    res.json({ wanteds: req.wanteds });
});
router.get("/wanteds/:id", auth.isPoliceLoggedIn, getWantedById, (req, res, next) => {
    res.json({ foundWanted: req.foundWanted });
});
router.post("/wanteds", auth.isPoliceLoggedIn, createWanted, (req, res, next) => {
    res.json({ msg: "Added wanted" });
});
router.put("/wanteds/:id", auth.isPoliceLoggedIn, updateWanted, (req, res, next) => {
    res.json({ msg: "Edited wanted" });
});
router.delete("/wanteds/:id", auth.isPoliceLoggedIn, deleteWanted, (req, res, next) => {
    res.json({ msg: "Deleted wanted" });
});
// ========= wanted is ok ======= //


// ========= suspects is ok ======= //
router.get("/suspects", auth.isPoliceLoggedIn, getSuspects, (req, res, next) => {
    res.json({ suspects: req.suspects });
});
router.get("/suspects/:id", auth.isPoliceLoggedIn, getSuspectById, (req, res, next) => {
    res.json({ foundSuspect: req.foundSuspect });
});
router.post("/suspects", auth.isPoliceLoggedIn, createSuspect, (req, res, next) => {
    res.json({ msg: "Added suspect" });
});
router.put("/suspects/:id", auth.isPoliceLoggedIn, updateSuspect, (req, res, next) => {
    res.json({ msg: "Edited wanted" });
});
router.delete("/suspects/:id", auth.isPoliceLoggedIn, deleteSuspect, (req, res, next) => {
    res.json({ msg: "Deleted wanted" });
});
// ========= suspects is ok ======= //

// ========= complaints is ok ======= //
router.get("/complaints", auth.isPoliceLoggedIn, getComplaints, (req, res, next) => {
    res.json({ complaints:req.complaints });
});
router.get("/complaints/:id", auth.isPoliceLoggedIn, getComplaintById, (req, res, next) => {
    res.json({ foundComplaint:req.foundComplaint });
});
router.put("/complaints/:id", auth.isPoliceLoggedIn, updateComplaint, (req, res, next) => {
    res.json({ msg: "edited complaint" });
});
router.delete("/complaints/:id",auth.isPoliceLoggedIn, deleteComplaint, (req, res, next) => {
    res.json({ msg: "Deleted Complaints" });
});
// ========= complaints is ok ======= //


module.exports = router;