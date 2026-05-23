var favoritoModel = require("../models/favoritoModel");

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idPersonagemFavorito = req.body.idPersonagemFavoritoServer;

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (idPersonagemFavorito == undefined) {
        res.status(400).send("O idPersonagemFavorito está undefined!");
    } else {
        favoritoModel.cadastrar(idUsuario, idPersonagemFavorito)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao salvar o personagem favorito! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
};