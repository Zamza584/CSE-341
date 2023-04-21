const routes = require("express").Router();

const myContoller = require('../controllers')

routes.get("/", myContoller.awesomeFunction);
routes.get("/awesome", myContoller.anotherPerson);

module.exports = routes;
