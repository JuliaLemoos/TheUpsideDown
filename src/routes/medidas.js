var express = require("express");
var router = express.Router();
var medidaController = require("../controllers/medidaController");

router.get("/dashboard-dados", function (req, res) {
    medidaController.buscarDadosDashboard(req, res);
});

module.exports = router;