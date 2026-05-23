// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var favoritoRouter = require("./src/routes/favorito"); 
var indexRouter = require("./src/routes/index");
var usuariosRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var medidaRouter = require("./src/routes/medidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/favorito", favoritoRouter);
app.use("/index", indexRouter);
app.use("/usuarios", usuariosRouter);
app.use("/quiz", quizRouter);
app.use("/medidas", medidaRouter);

app.listen(PORTA_APP, function () {
    console.log(`
 _____ _            _   _           _     _      ____                     
|_   _| |__   ___  | | | |_ __  ___(_) __| | ___|  _ \\ _____      ___ __  
  | | | '_ \\ / _ \\ | | | | '_ \\/ __| |/ _\` |/ _ \\ | | / _ \\ \\ /\\ / / '_ \\ 
  | | | | | |  __/ | |_| | |_) \\__ \\ | (_| |  __/ |_| | (_) \\ V  V /| | | |
  |_| |_| |_|\\___|  \\___/| .__/|___/_|\\__,_|\\___|____/ \\___/ \\_/\\_/ |_| |_|
                          |_|                                                

  Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://${HOST_APP}:${PORTA_APP}
  Ambiente: ${process.env.AMBIENTE_PROCESSO}
    `);
});
