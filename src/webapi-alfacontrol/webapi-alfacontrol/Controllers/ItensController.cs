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
    public class ItensController : ControllerBase
    {

        private readonly AppDbContext _context;

        public ItensController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles ="Administrador, Usuario")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Itens.ToListAsync();

            return Ok(model);

        }

        [Authorize(Roles = "Administrador, Usuario")]
        [HttpPost]
        public async Task<ActionResult> Create(Item model)
        {
          
            _context.Itens.Add(model);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Itens
                .Include(t => t.Fornecedores)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }


        [Authorize(Roles = "Administrador, Usuario")]
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Item model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDb = await _context.Itens.AsNoTracking()
               .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Itens.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Itens.FindAsync(id);

            if (model == null) return NotFound();

            _context.Itens.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Item model)
        {

            model.links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }

    }
}
