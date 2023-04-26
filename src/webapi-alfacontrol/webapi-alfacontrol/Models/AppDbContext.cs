using Microsoft.EntityFrameworkCore;

namespace webapi_alfacontrol.Models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options): base(options)
        { 

        }

        public DbSet<Fornecedor> Fornecedores { get; set; }
        public DbSet<Item> Itens { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }



    }
}
