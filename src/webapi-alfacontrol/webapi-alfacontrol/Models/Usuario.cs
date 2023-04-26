using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace webapi_alfacontrol.Models
{
    [Table("Usuarios")]
    public class Usuario
    {
        [Key]
        public string Cpf { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        [JsonIgnore]
        public string Senha { get; set; }
        [Required]
        public  Tipo Tipo { get; set; }

    }

    public enum Tipo
    {
        [Display(Name = "Administrador")]
        Administrador,
        [Display(Name = "Usuario")]
        Usuario

    }
}
