using EtradeAPI.DTO;
using MySql.Data.MySqlClient;
using System;

namespace EtradeAPI.DAO
{
    public class UsuariosDAO
    {
        public bool ValidarSeUsuarioExiste(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"SELECT COUNT(*) FROM Usuarios WHERE Email = @email OR Celular = @celular";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@celular", usuario.Celular);

            // ExecuteScalar retorna a contagem de registros encontrados
            int quantidadeUsuarios = Convert.ToInt32(comando.ExecuteScalar());

            conexao.Close();

            // Se a quantidade de usuários for maior que zero, o usuário existe
            return quantidadeUsuarios > 0;
        }

        public void Cadastrar(UsuarioDTO usuario)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO Usuarios (Nome, Email, Senha, Celular, Tipo) VALUES
						(@nome,@email,@senha,@celular,@tipo);

                        SELECT LAST_INSERT_ID();";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", usuario.Nome);     
            comando.Parameters.AddWithValue("@email", usuario.Email);
            comando.Parameters.AddWithValue("@senha", usuario.Senha);
            comando.Parameters.AddWithValue("@celular", usuario.Celular);
            comando.Parameters.AddWithValue("@tipo", usuario.Tipo.ID);

            // Executando a consulta e obtendo o ID inserido
            int idUsuarioCadastrado = Convert.ToInt32(comando.ExecuteScalar());
            var queryTurno = @"INSERT INTO TurnosUsuario (Usuario, Turno) VALUES
						       (@usuario,@turno);";

            foreach (var turno in usuario.Turnos)
            {
                comando = new MySqlCommand(queryTurno, conexao);
                comando.Parameters.AddWithValue("@usuario", idUsuarioCadastrado);
                comando.Parameters.AddWithValue("@turno", turno.ID);

                comando.ExecuteNonQuery();
            }

            conexao.Close();
        }

        public UsuarioDTO Login(UsuarioDTO dadosLogin)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Usuarios WHERE Email = @email AND Senha = @senha";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@email", dadosLogin.Email);
            comando.Parameters.AddWithValue("@senha", dadosLogin.Senha);

            var dataReader = comando.ExecuteReader();

            var usuario = new UsuarioDTO();
            while (dataReader.Read())
            {
                usuario.ID = int.Parse(dataReader["ID"].ToString());
                usuario.Nome = dataReader["Nome"].ToString();
                usuario.Email = dataReader["Email"].ToString();
                usuario.Celular = dataReader["Celular"].ToString();
            }
            conexao.Close();

            return usuario;
        }
    }
}
