using Microsoft.EntityFrameworkCore;

namespace Api.Clients.Data
{
    internal static class ClientsRepository
    {
        internal static async Task<IEnumerable<Client>> GetClientsAsync()
        {
            await using var db = new ApplicationDBContext();
            return await db.Clients.ToListAsync();
        }

        internal static async Task<IEnumerable<Goal>> GetGoalsByIdAsync(int clientId)
        {
            using var db = new ApplicationDBContext();
            var ree = await db.Goals.Where(x => x.ClientId == clientId).ToListAsync();
            return ree;
        }

        internal static Client GetClientById(int clientId)
        {
            using var db = new ApplicationDBContext();
            return db.Clients.FirstOrDefault(c => c.ClientId == clientId);
        }

        internal static async Task<bool> AddGoalsToClientAsync(Goal goal)
        {
            using (var db = new ApplicationDBContext())
            {
                try
                {
                    await db.Goals.AddAsync(goal);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }

        internal static async Task<bool> UpdateClientGoalsAsync(Goal goals)
        {
            using (var db = new ApplicationDBContext())
            {
                try
                {
                    db.Goals.Update(goals);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

    }
}
