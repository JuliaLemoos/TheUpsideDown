var quizModel = require("../models/quizModel");

function salvarPontuacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var totalAcertos = req.body.totalAcertosServer;
    var totalPerguntas = req.body.totalPerguntasServer;

    if (idUsuario == undefined) {
        return res.status(400).send("idUsuario está undefined!");
    } else if (totalAcertos == undefined) {
        return res.status(400).send("totalAcertos está undefined!");
    } else if (totalPerguntas == undefined) {
        return res.status(400).send("totalPerguntas está undefined!");
    }

    quizModel.salvarPontuacao(idUsuario, totalAcertos, totalPerguntas)
        .then(function (resultado) {
            res.status(201).json({ mensagem: "Pontuação salva com sucesso!" });
        })
        .catch(function (erro) {
            console.log("Erro ao salvar pontuação:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPontuacoes(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        return res.status(400).send("O idUsuario está undefined para a busca!");
    }

    quizModel.buscarPontuacoes(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhuma pontuação encontrada para este usuário.");
        }
    })
    .catch(function (erro) {
        console.log("Erro ao buscar pontuacoes:", erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    salvarPontuacao,
    buscarPontuacoes
};