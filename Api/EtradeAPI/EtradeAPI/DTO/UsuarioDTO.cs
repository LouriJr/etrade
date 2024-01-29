using System.Collections.Generic;

namespace EtradeAPI.DTO
{
    public class UsuarioDTO
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Descricao { get; set; }
        public string Celular { get; set; }
        public TipoDeUsuarioDTO Tipo { get; set; }
        public List<TurnoDTO> Turnos { get; set; }
    }
}
