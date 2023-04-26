using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using webapi_alfacontrol.Models;

namespace webapi_alfacontrol.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext _context;
        

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Usuarios.ToListAsync();

            return Ok(model);

        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public async Task<ActionResult> Create(string cpf, UserDto model)
        {
            Usuario novo = new Usuario();
            novo.Cpf = model.Cpf;
            novo.Nome = model.Nome;
            novo.Senha = BCrypt.Net.BCrypt.HashPassword(model.Senha);
            novo.Tipo = model.Tipo;
            

            _context.Usuarios.Add(novo);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetById", new { cpf = novo.Cpf }, novo);
        }

        [Authorize(Roles = "Administrador, Usuario")]
        [HttpGet("{cpf}")]
        public async Task<ActionResult> GetById(string cpf)
        {
            var model = await _context.Usuarios
               
                .FirstOrDefaultAsync(c => c.Cpf == cpf);

            if (model == null) return NotFound();

          
            return Ok(model);
        }

        [Authorize(Roles = "Administrador, Usuario")]
        [HttpPut("{cpf}")]
        public async Task<ActionResult> Update(string cpf, UserDto model)
        {
            if (cpf != model.Cpf) return BadRequest();
            var modeloDb = await _context.Usuarios.AsNoTracking()
               .FirstOrDefaultAsync(c => c.Cpf == cpf);

            if (modeloDb == null) return NotFound();

            modeloDb.Nome = model.Nome;
            modeloDb.Senha = BCrypt.Net.BCrypt.HashPassword(model.Senha);
            modeloDb.Tipo = model.Tipo;


            _context.Usuarios.Update(modeloDb);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [Authorize(Roles = "Administrador")]
        [HttpDelete("{cpf}")]
        public async Task<ActionResult> Delete(string cpf)
        {
            var model = await _context.Usuarios.FindAsync(cpf);

            if (model == null) return NotFound();

            _context.Usuarios.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var usuarioDb = await _context.Usuarios.FindAsync(model.Cpf);

            if (usuarioDb == null || !BCrypt.Net.BCrypt.Verify(model.Senha, usuarioDb.Senha))
                return Unauthorized();

            var jwt = GenerateJwtToken(usuarioDb);

            return Ok(new { jwtToken = jwt });
        }
        private string GenerateJwtToken(Usuario model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Ry74cBQva5dThwbwchR9jhbtRFnJxWSZ");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Cpf.ToString()),
                new Claim(ClaimTypes.Role, model.Tipo.ToString())
            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

    }
}
