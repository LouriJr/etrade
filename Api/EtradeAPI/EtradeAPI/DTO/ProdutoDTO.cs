namespace EtradeAPI.DTO
{
    public class ProdutoDTO
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double Valor { get; set; }
        public UsuarioDTO Usuario { get; set; }
        public StatusDTO Status{ get; set; }
    }
}
