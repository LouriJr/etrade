using EtradeAPI.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using static System.Net.Mime.MediaTypeNames;

namespace EtradeAPI.DAO
{
    public class ProdutosDAO
    {
        public void Cadastrar(ProdutoDTO produto)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Produtos (Nome, Descricao, Valor, Usuario, Status) VALUES
						(@nome,@descricao,@valor,@usuario,@status);

                        SELECT LAST_INSERT_ID();";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", produto.Nome);
            comando.Parameters.AddWithValue("@descricao", produto.Descricao);
            comando.Parameters.AddWithValue("@valor", produto.Valor);
            comando.Parameters.AddWithValue("@usuario", produto.Usuario.ID);
            comando.Parameters.AddWithValue("@status", produto.Status.ID);

            int idProdutoCadastrado = Convert.ToInt32(comando.ExecuteScalar());

            var queryTurno = @"INSERT INTO ImagensProduto (Link, Produto) VALUES
                                 (@link,@produto);";

            foreach (var imagem in produto.Imagens)
            {
                comando = new MySqlCommand(queryTurno, conexao);
                comando.Parameters.AddWithValue("@link", imagem.Link);
                comando.Parameters.AddWithValue("@produto", idProdutoCadastrado);

                comando.ExecuteNonQuery();
            }

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

                produto.Imagens = ListarImagensProduto(produto.ID);

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

        public List<ProdutoDTO> ListarProdutosUsuario(int idUsuario)
        { 
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"SELECT 
                            Produtos.ID AS ProdutoID,
                            Produtos.Nome AS Produto,
                            Produtos.Descricao AS DescricaoProduto,
                            Valor,
                            StatusProduto.ID AS StatusID,
                            StatusProduto.Nome AS Status
                            FROM Produtos 
                            INNER JOIN StatusProduto
                            ON Produtos.Status = StatusProduto.ID
                            WHERE Usuario = @usuario;";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@usuario", idUsuario);

            var dataReader = comando.ExecuteReader();

            var produtos = new List<ProdutoDTO>();

            while (dataReader.Read())
            {
                var produto = new ProdutoDTO();
                var status = new StatusDTO();

                produto.ID = int.Parse(dataReader["ProdutoID"].ToString());
                produto.Nome = dataReader["Produto"].ToString();
                produto.Descricao = dataReader["DescricaoProduto"].ToString();
                produto.Valor = double.Parse(dataReader["Valor"].ToString());

                status.ID = int.Parse(dataReader["StatusID"].ToString());
                status.Nome = dataReader["Status"].ToString();

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

        private List<ImagemProdutoDTO> ListarImagensProduto(int produtoID)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"SELECT Link From ImagensProduto WHERE Produto = @produto";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@produto", produtoID);

            var dataReader = comando.ExecuteReader();

            var imagens = new List<ImagemProdutoDTO>();

            while (dataReader.Read())
            {
                var imagem = new ImagemProdutoDTO();
                imagem.Link = dataReader["Link"].ToString();

                imagens.Add(imagem);
            }
            conexao.Close();

            return imagens;
        }
    }
}
