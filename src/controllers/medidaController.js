var medidaModel = require("../models/medidaModel");

function buscarDadosDashboard(req, res) {
    console.log(`Recuperando todos os dados para a dashboard (KPI, Personagens e Quiz)`);

    medidaModel.buscarTotalUsuarios().then(function (resultadoUsuarios) {

        medidaModel.buscarVotosPersonagens().then(function (resultadoPersonagens) {

            medidaModel.buscarDadosQuiz().then(function (resultadoQuiz) {

                res.status(200).json({
                    usuarios: resultadoUsuarios[0],
                    personagens: resultadoPersonagens,
                    quiz: resultadoQuiz[0]
                });

            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });

        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });

    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDadosDashboard
}