using System.ComponentModel.DataAnnotations;

namespace webapi_alfacontrol.Models
{
    public class UserDto
    {

        public string Cpf { get; set; }
        [Required]

        public string Nome { get; set; }
        [Required]

        public string Senha { get; set; }
        [Required]

        public Tipo Tipo{ get; set; }

    }
}
