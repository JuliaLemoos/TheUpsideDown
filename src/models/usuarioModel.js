var database = require("../database/config");

function autenticar(email, senha) {
    var instrucao = `
        SELECT id, nome, email
        FROM usuarios
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, idTemporada) {
    var valorTemporadaSql = idTemporada === null ? 'NULL' : idTemporada;

    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha, idTemporadaFavorita)
        VALUES ('${nome}', '${email}', '${senha}', ${valorTemporadaSql});
    `;
    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { autenticar, cadastrar };