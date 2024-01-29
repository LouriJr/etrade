using MySql.Data.MySqlClient;

namespace EtradeAPI.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Build()
        {
            return new MySqlConnection("Server=localhost;Database=etrade;Uid=root;Pwd=root;");
        }
    }
}
