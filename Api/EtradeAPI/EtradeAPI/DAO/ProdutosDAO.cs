using EtradeAPI.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace EtradeAPI.DAO
{
    public class ProdutosDAO
    {
        public void Cadastrar(ProdutoDTO produto)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Produtos (Nome, Descricao, Valor, Usuario, Status) VALUES
						(@nome,@descricao,@valor,@usuario,@status)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", produto.Nome);
            comando.Parameters.AddWithValue("@descricao", produto.Descricao);
            comando.Parameters.AddWithValue("@valor", produto.Valor);
            comando.Parameters.AddWithValue("@usuario", produto.Usuario.ID);
            comando.Parameters.AddWithValue("@status", produto.Status.ID);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public List<ProdutoDTO> ListarPorTurno(int turno)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"SELECT Produtos.ID AS ProdutoID,
                            Produtos.Nome AS Produto,
                            Produtos.Descricao AS DescricaoProduto,
                            Valor,
                            Usuarios.ID AS UsuarioID,
                            Usuarios.Nome AS Usuario,
                            Celular
                            FROM Produtos 
                            INNER JOIN Usuarios 
                            ON Produtos.Usuario = Usuarios.ID
                            INNER JOIN TurnosUsuario 
                            ON TurnosUsuario.Usuario = Usuarios.ID
                            WHERE Turno = @turno AND Status = 2;";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@turno", turno);

            var dataReader = comando.ExecuteReader();

            var produtos = new List<ProdutoDTO>();

            while (dataReader.Read())
            {
                var produto = new ProdutoDTO();
                var usuario = new UsuarioDTO();

                produto.ID = int.Parse(dataReader["ProdutoID"].ToString());
                produto.Nome = dataReader["Produto"].ToString();
                produto.Descricao = dataReader["DescricaoProduto"].ToString();
                produto.Valor = double.Parse(dataReader["Valor"].ToString());

                usuario.ID = int.Parse(dataReader["UsuarioID"].ToString());
                usuario.Nome = dataReader["Usuario"].ToString();
                usuario.Celular = dataReader["Celular"].ToString();

                produto.Usuario = usuario;

                produtos.Add(produto);
            }
            conexao.Close();

            return produtos;
        }

        public List<ProdutoDTO> ListarPendentes()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"SELECT Produtos.ID AS ProdutoID,
                            Produtos.Nome AS Produto,
                            Produtos.Descricao AS DescricaoProduto,
                            Valor,
                            Usuarios.ID AS UsuarioID,
                            Usuarios.Nome AS Usuario,
                            Celular
                            FROM Produtos 
                            INNER JOIN Usuarios 
                            ON Produtos.Usuario = Usuarios.ID
                            WHERE Status = 1;";

            var comando = new MySqlCommand(query, conexao);

            var dataReader = comando.ExecuteReader();

            var produtos = new List<ProdutoDTO>();

            while (dataReader.Read())
            {
                var produto = new ProdutoDTO();
                var usuario = new UsuarioDTO();

                produto.ID = int.Parse(dataReader["ProdutoID"].ToString());
                produto.Nome = dataReader["Produto"].ToString();
                produto.Descricao = dataReader["DescricaoProduto"].ToString();
                produto.Valor = double.Parse(dataReader["Valor"].ToString());

                usuario.ID = int.Parse(dataReader["UsuarioID"].ToString());
                usuario.Nome = dataReader["Usuario"].ToString();
                usuario.Celular = dataReader["Celular"].ToString();

                produto.Usuario = usuario;

                produtos.Add(produto);
            }
            conexao.Close();

            return produtos;
        }

        public void AlterarStatusProduto(int produtoID, int statusID)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE Produtos SET Status = @status WHERE ID = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@status", statusID);
            comando.Parameters.AddWithValue("@id", produtoID);

            comando.ExecuteNonQuery();

            conexao.Close();
        }
    }
}
