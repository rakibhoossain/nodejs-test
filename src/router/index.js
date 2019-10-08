const express = require("express");
const controller = require("../controller");

const router = express.Router();

router.param("id", controller.checkID);
router.route("/").get(controller.reqTime, controller.data);

router.route("/id/:id").get(controller.data);

module.exports = router;
