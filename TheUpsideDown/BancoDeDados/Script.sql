CREATE DATABASE TheUpsideDown;
USE TheUpsideDown;

CREATE TABLE temporadas (
id INT PRIMARY KEY,
titulo VARCHAR(50) NOT NULL UNIQUE,
descricao VARCHAR(200)
);

CREATE TABLE personagens (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45) NOT NULL UNIQUE,
anoNascimento CHAR(4),
sobre VARCHAR(200)
);

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(100) NOT NULL,
dataCadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
idTemporadaFavorita INT,
FOREIGN KEY (idTemporadaFavorita) REFERENCES temporadas(id)
);

CREATE TABLE usuario_personagens_favoritos (
idUsuario INT NOT NULL,
idPersonagemFavorito INT NOT NULL,
dataSelecao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (idUsuario, idPersonagemFavorito),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idPersonagemFavorito) REFERENCES personagens(id)
);

CREATE TABLE viloes (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45) NOT NULL UNIQUE,
descricao VARCHAR(100),
idTemporadaAparicao INT,
FOREIGN KEY (idTemporadaAparicao) REFERENCES temporadas(id)
);

CREATE TABLE perguntas_quiz (
id INT PRIMARY KEY,
textoPergunta VARCHAR(200) NOT NULL,
correta VARCHAR(15)
);

CREATE TABLE respostas_usuario_quiz (
id INT AUTO_INCREMENT PRIMARY KEY,
idUsuario INT NOT NULL,
idPergunta INT NOT NULL,
respostaSelecionada BOOLEAN NOT NULL,
dtResposta DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idPergunta) REFERENCES perguntas_quiz(id)
);

CREATE TABLE pontuacoes_quiz (
id INT AUTO_INCREMENT PRIMARY KEY,
idUsuario INT NOT NULL,
totalAcertos INT NOT NULL,
totalPerguntas INT NOT NULL,
dtRealizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO temporadas (idTemporada, titulo, descricao) VALUES
(1, 'Stranger Things', 'O desaparecimento de Will Byers e a chegada de Eleven.'),
(2, 'Stranger Things 2', 'As consequências do Mundo Invertido e a chegada de novos personagens.'),
(3, 'Stranger Things 3', 'O verão de 1985 e um novo perigo espreitando Starcourt Mall.'),
(4, 'Stranger Things 4', 'A divisão do grupo e a ameaça de Vecna.'),
(5, 'Stranger Things 5', 'A temporada final, com o confronto decisivo contra o mal.');

INSERT INTO personagens (nome, anoNascimento, sobre) VALUES
('Eleven', '1971', 'Uma garota com poderes psicocinéticos.'),
('Mike Wheeler','1971', 'Um dos amigos de Will e interesse amoroso de Eleven.'),
('Dustin Henderson', '1971', 'O cérebro do grupo, com paixão por ciência.'),
('Lucas Sinclair', '1971', 'O realista do grupo, mestre do estilingue.'),
('Will Byers', '1971', 'O garoto que desapareceu e foi resgatado do Mundo Invertido.');

INSERT INTO viloes (nome, descricao, idTemporadaAparicao) VALUES
('Demogorgon', 'Criatura do Mundo Invertido que caça em Hawkins.', 1),
('Devorador de Mentes', 'Entidade maligna do Mundo Invertido que controla criaturas.', 2),
('Vecna', 'Um ser poderoso do Mundo Invertido com habilidades psíquicas.', 4);

INSERT INTO perguntas_quiz (idPergunta, textoPergunta) VALUES
(1, 'Qual o nome da cidade onde se passa Stranger Things?'),
(2, 'Qual jogo os amigos costumam jogar juntos?'),
(3, 'Qual é o nome do mundo paralelo da série?'),
(4, 'Qual personagem possui poderes telecinéticos?'),
(5, 'Quem desaparece no início da primeira temporada?'),
(6, 'Qual é o nome do monstro da primeira temporada?'),
(7, 'Qual comida Eleven ama?'),
(8, 'Quem é o chefe de polícia de Hawkins que ajudou a encontrar Will?'),
(9, 'Quais personagens trabalham na sorveteria Scoops Ahoy?'),
(10, 'Quem é o principal vilão da quarta temporada?');

INSERT INTO respostas_quiz (idPergunta, textoResposta, correta) VALUES
(1, 'Hawkins', TRUE),
(1, 'Springfield', FALSE),
(1, 'Riverdale', FALSE),
(1, 'Las Vegas', FALSE),
(2, 'Monopoly', FALSE),
(2, 'Xadrez', FALSE),
(2, 'Dungeons & Dragons', TRUE),
(2, 'Uno', FALSE),
(3, 'Mundo Invertido', TRUE),
(3, 'Submundo', FALSE),
(3, 'Dimensão Sombria', FALSE),
(3, 'Vale das Sombras', FALSE),
(4, 'Max', FALSE),
(4, 'Nancy ', FALSE),
(4, 'Eleven', TRUE),
(4, 'Robin', FALSE),
(5, 'Dustin', FALSE),
(5, 'Mike', FALSE),
(5, 'Lucas', FALSE),
(5, 'Will', TRUE),
(6, 'Vecna', FALSE),
(6, 'Demogorgon', TRUE),
(6, 'Mind Flayer', FALSE),
(6, 'Shadow', FALSE),
(7, 'Pizza', FALSE),
(7, 'Hambúrguer', FALSE),
(7, 'Waffles', TRUE),
(7, 'Sorvete', FALSE),
(8, 'Hopper', TRUE),
(8, 'Steve', FALSE),
(8, 'Jonathan', FALSE),
(8, 'Murray', FALSE),
(9, 'Nancy e Jonathan', FALSE),
(9, 'Steve e Robin', TRUE),
(9, 'Dustin e Lucas', FALSE),
(9, 'Mike e Max', FALSE),
(10, 'Demogorgon', FALSE),
(10, 'Mind Flayer', FALSE),
(10, 'Vecna', TRUE),
(10, 'Billy', FALSE);

SELECT * FROM usuarios;