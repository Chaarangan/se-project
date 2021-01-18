const router = require("express").Router();
const { getSuspects, getSuspectById } = require("../services/suspect_service");
const { login } = require("../services/authService");
const {
  getArticles,
  getLaws,
  getLawById,
  getEmergency,
} = require("../services/law_service");

router.post("/login", login, (req, res, next) => {
  res.send(req.arr);
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