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

INSERT INTO temporadas (id, titulo, descricao) VALUES
(1, 'Stranger Things 1', 'O desaparecimento de Will Byers e a chegada de Eleven.'),
(2, 'Stranger Things 2', 'As consequências do Mundo Invertido e a chegada de novos personagens.'),
(3, 'Stranger Things 3', 'O verão de 1985 e um novo perigo espreitando Starcourt Mall.'),
(4, 'Stranger Things 4', 'A divisão do grupo e a ameaça de Vecna.'),
(5, 'Stranger Things 5', 'A temporada final, com o confronto decisivo contra o mal.');

INSERT INTO personagens (nome, anoNascimento, sobre) VALUES
('Eleven', '1971', 'Uma garota com poderes psicocinéticos.'),
('Mike Wheeler','1971', 'Um dos amigos de Will e interesse amoroso de Eleven.'),
('Dustin Henderson', '1971', 'O cérebro do grupo, com paixão por ciência.'),
('Lucas Sinclair', '1971', 'O realista do grupo, mestre do estilingue.'),
('Will Byers', '1971', 'O garoto que desapareceu e foi resgatado do Mundo Invertido.'),
('Max Mayfield', '1971', 'Uma skatista durona que se junta ao grupo e adora videogames.');

INSERT INTO viloes (nome, descricao, idTemporadaAparicao) VALUES
('Demogorgon', 'Criatura do Mundo Invertido que caça em Hawkins.', 1),
('Devorador de Mentes', 'Entidade maligna do Mundo Invertido que controla criaturas.', 2),
('Vecna', 'Um ser poderoso do Mundo Invertido com habilidades psíquicas.', 4);

INSERT INTO perguntas_quiz (id, textoPergunta, correta) VALUES
(1, 'Qual o nome da cidade onde se passa Stranger Things?', 'Hawkins'),
(2, 'Qual jogo os amigos costumam jogar juntos?', 'Dungeons & Dragons'),
(3, 'Qual é o nome do mundo paralelo da série?', 'Mundo Invertido'),
(4, 'Qual personagem possui poderes telecinéticos?', 'Eleven'),
(5, 'Quem desaparece no início da primeira temporada?', 'Will'),
(6, 'Qual é o nome do monstro da primeira temporada?', 'Demogorgon'),
(7, 'Qual comida Eleven ama?', 'Waffles'),
(8, 'Quem é o chefe de polícia de Hawkins que ajudou a encontrar Will?', 'Hopper'),
(9, 'Quais personagens trabalham na sorveteria Scoops Ahoy?', 'Steve e Robin'),
(10, 'Quem é o principal vilão da quarta temporada?', 'Vecna');