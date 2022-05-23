using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Clients.Data
{
    public class Goal
    {
        [Key]
        public int GoalId { get; set; }

        [ForeignKey("Client")]
        public int ClientId { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(10000)]
        public string Details { get; set; } = string.Empty;

        public DateTime DateCreated { get; set; }

        public virtual Client Client { get; set; }
    }
}
