using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi_alfacontrol.Models
{
    [Table("Fornecedores")]
    public class Fornecedor : LinksHATEOS
    {
        [Key]

        public int Id { get; set; }
        [Required]

        public int Cnpj { get; set; }
        [Required]

        public string Nome { get; set; }
        [Required]

        public int Cep { get; set; }
        [Required]

        public string Rua { get; set; }
        [Required]

        public int Numero { get; set; }
        [Required]

        public string Bairro { get; set; }
        [Required]

        public string Cidade { get; set; }

        public ICollection<Item> Itens { get; set; }

    }
}
