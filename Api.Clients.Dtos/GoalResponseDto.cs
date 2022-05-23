namespace Api.Clients.Dtos
{
    public class GoalResponseDto
    {
       public int GoalId { get; set; }

       public int ClientId { get; set; }
        public string Title { get; set; }
       public string Details { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
