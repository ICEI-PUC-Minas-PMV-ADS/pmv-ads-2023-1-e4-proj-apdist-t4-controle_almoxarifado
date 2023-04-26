using System.ComponentModel.DataAnnotations;

namespace webapi_alfacontrol.Models
{
    public class AuthenticateDto
    {
        [Required]
        public string Cpf { get; set; }

        [Required]
        public string Senha { get; set; }

    }
}
