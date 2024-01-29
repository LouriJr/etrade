CREATE DATABASE IF NOT EXISTS Etrade;
USE Etrade;

CREATE TABLE TiposDeUsuario (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255)
);

INSERT INTO TiposDeUsuario (Nome) VALUES
('Administrador'), ('Vendedor');

CREATE TABLE Turnos (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255)
);

INSERT INTO Turnos (Nome) VALUES
('Manhã'), ('Tarde'), ('Noite');

CREATE TABLE Usuarios (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Nome VARCHAR (100),
	Email VARCHAR (100),
    Senha VARCHAR (1000),
    Descricao VARCHAR (300),
    Celular VARCHAR (15),
	Tipo INT NOT NULL,
    FOREIGN KEY (Tipo) REFERENCES TiposDeUsuario(ID)
);

CREATE TABLE TurnosUsuario (
	Turno INT NOT NULL,
    Usuario INT NOT NULL,
    FOREIGN KEY (Turno) REFERENCES Turnos(ID),
    FOREIGN KEY (Usuario) REFERENCES Usuarios(ID)
);

CREATE TABLE StatusProduto (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255)
);

INSERT INTO StatusProduto (Nome) VALUES
('Pendente'), ('Disponível'), ('Recusado'), ('Indisponível');

CREATE TABLE Produtos (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Nome VARCHAR (100),
    Descricao VARCHAR (300),
	Valor DECIMAL(10,2),
    Usuario INT NOT NULL,
    Status INT NOT NULL,
    FOREIGN KEY (Status) REFERENCES StatusProduto(ID),
    FOREIGN KEY (Usuario) REFERENCES Usuarios(ID)
);
	