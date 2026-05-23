var database = require("../database/config");

function salvarPontuacao(idUsuario, totalAcertos, totalPerguntas) {
  var instrucao = `
        INSERT INTO pontuacoes_quiz (idUsuario, totalAcertos, totalPerguntas)
        VALUES (${idUsuario}, ${totalAcertos}, ${totalPerguntas});
    `;
  console.log("Executando SQL:\n" + instrucao);
  return database.executar(instrucao);
}

function buscarPontuacoes(idUsuario) {
  console.log("ACESSEI O QUIZ MODEL \n buscarPontuacoes():", idUsuario);

  var instrucaoSql = `
  SELECT totalAcertos, total_perguntas, DATE_FORMAT(dtRealizacao, '%d/%m/%Y %H:%i') as data_registro)
  FROM pontuacoes_quiz
  WHERE idUsuario = ${idUsuario}
  ORDER BY id DESC;
  `;

  console.log("Executando a instrução SQL: \n" + instrucoesSql);
  return database.executar(instrucaoSql);

}

module.exports = {
  salvarPontuacao,
  buscarPontuacoes
};
