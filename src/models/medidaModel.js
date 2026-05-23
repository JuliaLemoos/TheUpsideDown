var database = require("../database/config");

function buscarTotalUsuarios() {
    var instrucaoSql = `SELECT COUNT(id) AS totalUsuarios FROM usuarios;`;
    console.log("Executando SQL - Total Usuários: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarVotosPersonagens() {
    var instrucaoSql = `
        SELECT idPersonagemFavorito, COUNT(idUsuario) AS totalVotos 
        FROM usuario_personagens_favoritos 
        GROUP BY idPersonagemFavorito;
    `;
    console.log("Executando SQL - Votos Personagens: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuiz() {
    var instrucaoSql = `
        SELECT 
            AVG(totalAcertos) AS mediaAcertos,
            AVG(totalPerguntas - totalAcertos) AS mediaErros
        FROM pontuacoes_quiz;
    `;
    console.log("Executando SQL - Dados Quiz: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTotalUsuarios,
    buscarVotosPersonagens,
    buscarDadosQuiz
};