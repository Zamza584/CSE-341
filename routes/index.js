const router = require("express").Router();
const myContoller = require('../controllers')

router.get("/", myContoller.awesomeFunction);
router.get("/awesome", myContoller.anotherPerson);

module.exports = router;
