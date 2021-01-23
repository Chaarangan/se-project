const router = require("express").Router();
const auth = require("../services/authService");

const {
    createComplaint,
    updateComplaint,
    getComplaints,
    getComplaintById

    // getComplaintStatus,
} = require("../services/complaint_service");

// ========= complaints is ok ======= //
router.get("/complaints",  auth.isPeopleLoggedIn, getComplaints, (req, res, next) => {
    res.json({ complaints: req.complaints });
});
router.get("/complaints/:id", auth.isPeopleLoggedIn, getComplaintById, (req, res, next) => {
    res.json({ foundComplaint: req.foundComplaint });
});
router.post("/complaints", createComplaint, (req, res, next) => {
    res.json({ msg: "Created complaint" });
});
router.put("/complaints/:id", auth.isPeopleLoggedIn, updateComplaint, (req, res, next) => {
    res.json({ msg: "edited complaint" });
});
// ========= complaints is ok ======= //


router.post("/logout", auth.logout, (req, res, next) => {
    res.json({ msg: "logging out" });
})

module.exports = router;