using Microsoft.EntityFrameworkCore;

namespace Api.Clients.Data
{
    public class ApplicationDBContext : DbContext
    {
        public DbSet<Client> Clients { get; set; }

        public DbSet<Goal> Goals { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) =>
            dbContextOptionsBuilder.UseSqlite("Data Source=./Data/ApplicationDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Client[] ClientsToSeed = new Client[4];

            for (int i = 1; i <= 4; i++)
            {
                ClientsToSeed[i - 1] = new Client
                {
                    ClientId = i,
                    FirstName = $"harsha {i}",
                    LastName = $"ravi {i}",
                    DateCreated = DateTime.Now
                };
            }

            Goal[] GoalsToSeed = new Goal[4];
            for (int i = 1; i <= 4; i++)
            {
                GoalsToSeed[i - 1] = new Goal
                {
                   GoalId = i,
                   ClientId = i,
                   Title = $"Title {1}",
                   Details = $"Details {i}",
                   DateCreated = DateTime.Now
                };
            }

            modelBuilder.Entity<Client>().HasData(ClientsToSeed);
            modelBuilder.Entity<Goal>().HasData(GoalsToSeed);
        }
    }
}
