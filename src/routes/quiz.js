var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarPontuacao", function (req, res) {
    quizController.salvarPontuacao(req, res);
});

router.get("/buscarPontuacoes/:idUsuario", function (req, res) {
    quizController.buscarPontuacoes(req, res);
});

module.exports = router;