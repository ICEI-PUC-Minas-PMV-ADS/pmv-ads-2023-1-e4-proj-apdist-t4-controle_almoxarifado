using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi_alfacontrol.Models
{

    [Table("Itens")]

    public class Item : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]

        public string Nome { get; set; }
        [Required]

        public int Quantidade { get; set; }
        [Required]

        [Column(TypeName ="decimal(18,2)")]
        public decimal Valor { get; set; }
        [Required]

        public DateTime DataEntrada { get; set; }
        [Required]

        public TipoMaterial Tipo { get; set;}
        [Required]
        public int FornecedorId { get; set; } // FK
   

        public Fornecedor Fornecedores { get; set; } // ??

    }

    public enum TipoMaterial
    {
        [Display(Name = "Escritório")]
        Escritório,
        [Display(Name = "Limpeza")]
        Limpeza,
        [Display(Name = "Diversos")]
        Diversos
        
    }
}
