using EtradeAPI.DAO;
using EtradeAPI.DTO;
using Microsoft.AspNetCore.Mvc;

namespace EtradeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        [HttpPost]
        [Route("Cadastrar")]
        public IActionResult Cadastrar([FromBody] ProdutoDTO produto)
        {
            //Todo produto quando cadastrado deve ter o Status pendente, ou seja, aguardando aprovação.
            var statusPendente = new StatusDTO();
            statusPendente.ID = 1;

            produto.Status = statusPendente;

            var dao = new ProdutosDAO();
            dao.Cadastrar(produto);

            return Ok();
        }

        [HttpGet]
        [Route("ListarPorTurno")]

        public IActionResult ListarPorTurno(int turno)
        {
            var dao = new ProdutosDAO();
            var produtos = dao.ListarPorTurno(turno);

            return Ok(produtos);
        }

        [HttpGet]
        [Route("ListarPendentes")]
        public IActionResult ListarPendentes()
        {
            var dao = new ProdutosDAO();
            var produtos = dao.ListarPendentes();

            return Ok(produtos);
        }

        [HttpGet]
        [Route("ListarProdutosUsuario")]
        public IActionResult ListarProdutosUsuario(int idUsuario)
        {
            var dao = new ProdutosDAO();
            var produtos = dao.ListarProdutosUsuario(idUsuario);

            return Ok(produtos);
        }

        [HttpPut]
        [Route("status")]
        public IActionResult AlterarStatusProduto(int produtoID, int statusID)
        {
            var dao = new ProdutosDAO();
            dao.AlterarStatusProduto(produtoID, statusID);

            return Ok();
        }
    }
}
