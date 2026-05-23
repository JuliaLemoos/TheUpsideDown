var database = require("../database/config");

function cadastrar(idUsuario, idPersonagemFavorito) {
    console.log("ACESSEI O FAVORITO MODEL \n cadastrar():", idUsuario, idPersonagemFavorito);

        var instrucaoSql = `
        INSERT INTO usuario_personagens_favoritos (idUsuario, idPersonagemFavorito)
        VALUES (${idUsuario}, ${idPersonagemFavorito});
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};