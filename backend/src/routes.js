const { Router } = require("express");
const temperatureController = require("./controllers/temperature-controller");

const router = Router()

router.get('/', temperatureController.index)

module.exports = router