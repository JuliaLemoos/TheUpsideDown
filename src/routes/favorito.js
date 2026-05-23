var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/:cadastrar", function (req, res) {
  favoritoController.cadastrar(req, res);
});

module.exports = router;