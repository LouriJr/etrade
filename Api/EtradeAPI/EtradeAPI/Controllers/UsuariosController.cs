using EtradeAPI.DAO;
using EtradeAPI.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace EtradeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        [HttpPost]
        [Route("Cadastrar")]
        public IActionResult Cadastrar([FromBody] UsuarioDTO usuario)
        {            
            var dao = new UsuariosDAO();
            var usuarioExiste = dao.ValidarSeUsuarioExiste(usuario.Email);

            if (usuarioExiste)
            {
                return BadRequest("Usuário já cadastrado!");
            }

            dao.Cadastrar(usuario);

            return Ok();
        }


        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromForm] UsuarioDTO usuario)
        {
            var dao = new UsuariosDAO();
            var usuarioLogado = dao.Login(usuario);

            if (usuarioLogado.ID == 0)
            {
                return NotFound("Usuário e/ou senha inválidos");
            }

            var token = GenerateJwtToken(usuarioLogado, "PU8a9W4sv2opkqlOwmgsn3w3Innlc4D5");
            return Ok(new { token });
        }

        private string GenerateJwtToken(UsuarioDTO usuario, string secretKey)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim("ID", usuario.ID.ToString()),
                new Claim("Email", usuario.Email),
            };

            var token = new JwtSecurityToken(
                "APIUsuarios",
                "APIUsuarios",
                claims,
                expires: DateTime.UtcNow.AddMinutes(1),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
