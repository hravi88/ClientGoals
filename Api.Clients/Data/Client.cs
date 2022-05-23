using System.ComponentModel.DataAnnotations;

namespace Api.Clients.Data
{
    public class Client
    {
            [Key]
            public int ClientId { get; set; }

            [Required]
            [MaxLength(100)]
            public string FirstName { get; set; }

            [Required]
            [MaxLength(100)]
            public string LastName { get; set; }

            public DateTime DateCreated { get; set; }

            public virtual ICollection<Goal> Goals { get; set; }
    }
}
