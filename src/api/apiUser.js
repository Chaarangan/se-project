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
router.get("/complaints",auth.isLoggedIn, getComplaints, (req, res, next) => {
    res.json({ complaints: req.complaints });
});
router.get("/complaints/:id",auth.isLoggedIn, getComplaintById, (req, res, next) => {
    res.json({ foundComplaint: req.foundComplaint });
});
router.post("/complaints",auth.isLoggedIn, createComplaint, (req, res, next) => {
    res.json({ msg: "Created complaint" });
});
router.put("/complaints/:id",auth.isLoggedIn, updateComplaint, (req, res, next) => {
    res.json({ msg: "edited complaint" });
});
// ========= complaints is ok ======= //


router.post("/logout", auth.logout, (req, res, next) => {
    res.json({ msg: "logging out" });
})

module.exports = router;