var express = require("express");
var router = express.Router();
const crown2Controller_57 = require("../controllers/crown2Controller_57");

/* GET home page. */
router.get("/", crown2Controller_57.getCategories);

module.exports = router;
