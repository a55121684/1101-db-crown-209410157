var express = require("express");
var router = express.Router();
const apiCrown2Controller_57 = require("../controllers/apiCrown2Controller_57");

/* GET home page. */
router.get("/category_57", apiCrown2Controller_57.getCategories);

module.exports = router;
