using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi_alfacontrol.Models
{

    [Table("Itens")]

    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Required]

        public string Descricao { get; set; }

        [Required]

        public string Unidade { get; set; }

        [Required]

        public int EstoqueAtual { get; set; }
        [Required]

        public string MarcaProduto { get; set; }

    }

    
}
