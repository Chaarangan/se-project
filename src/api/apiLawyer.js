const router = require("express").Router();

const {
    getLaws,
    getLawById,
    createLaw,
    updateLaw,
    deleteLaw,
} = require("../services/law_service");

// ========= laws is ok ======= //
router.get("/laws", getLaws, (req, res, next) => {
    res.json({ laws: req.laws });
});
router.get("/laws/:id", getLawById, (req, res, next) => {
    res.json({ foundLaw: req.foundLaw });
});
router.post("/laws", createLaw, (req, res, next) => {
    res.json({ msg: "Added law" });
});
router.put("/laws/:id", updateLaw, (req, res, next) => {
    res.json({ msg: "Edited law" });
});
router.delete("/laws/:id", deleteLaw, (req, res, next) => {
    res.json({ msg: "Deleted law" });
});
// ========= laws is ok ======= //

module.exports = router;