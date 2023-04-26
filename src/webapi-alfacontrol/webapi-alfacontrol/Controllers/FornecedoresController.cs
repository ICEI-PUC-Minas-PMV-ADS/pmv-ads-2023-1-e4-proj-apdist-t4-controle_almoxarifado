using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi_alfacontrol.Models;

namespace webapi_alfacontrol.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FornecedoresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FornecedoresController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Fornecedores.ToListAsync();

            return Ok(model);

        }

        [HttpPost]
        public async Task<ActionResult> Create(Fornecedor model)
        {
            if(model.Cnpj <= 0 || model.Cep <= 0)
            {
                return BadRequest(new {message="CNPJ e CEP não podem ser nulos"});
            }

           _context.Fornecedores.Add(model);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetById", new {id = model.Id}, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Fornecedores
               .Include(t => t.Itens)
                .FirstOrDefaultAsync(c => c.Id == id);
                
            if(model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Fornecedor model)
        {
            if(id != model.Id) return BadRequest();
            var modeloDb = await _context.Fornecedores.AsNoTracking()
               .FirstOrDefaultAsync(c => c.Id == id);

            if(modeloDb == null) return NotFound();

            _context.Fornecedores.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

      
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
           var model = await _context.Fornecedores.FindAsync(id);

            if (model == null) return NotFound();

            _context.Fornecedores.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Fornecedor model) {

            model.links.Add(new LinkDto(model.Id, Url.ActionLink(), rel:"self", metodo: "GET"));
            model.links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }
    }
}
