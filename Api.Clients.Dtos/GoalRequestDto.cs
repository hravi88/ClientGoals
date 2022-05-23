namespace Api.Clients.Dtos
{
    public class GoalRequestDto
    {
        public int ClientId { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
