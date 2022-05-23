using Api.Clients.Data;

namespace Api.Clients.Proxies
{
    public interface IClientsProxy
    {
        Task<IEnumerable<Client>> GetClients();
        Task<IEnumerable<Goal>> GetGoalsByClient(int clientId);
        Client GetClientById(int clientId);
        Task<bool> AddGoals(Goal goal);
        Task<bool> UpdateGoals(Goal goal);
    }
    public class ClientsProxy : IClientsProxy
    {
        private readonly ILogger _logger;

        public ClientsProxy(ILogger<ClientsProxy> logger)
        {
            _logger = logger;
        }

        public async Task<IEnumerable<Client>> GetClients()
        {
            try
            {
                _logger.LogInformation("Get Clients details =>");
                var response = await ClientsRepository.GetClientsAsync();
                return response.ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError("Get Clients details errorMessage: {0}", ex.Message);
                throw;
            }
        }

        public Client GetClientById(int clientId)
        {
            try
            {
                _logger.LogInformation("Get Clients by clientId =>");
                var response = ClientsRepository.GetClientById(clientId);
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError("Get Goals by client errorMessage: {0}", ex.Message);
                throw;
            }
        }

        public async Task<IEnumerable<Goal>> GetGoalsByClient(int clientId)
        {
            try
            {
                _logger.LogInformation("Get Goals details by clientId =>");
                return await ClientsRepository.GetGoalsByIdAsync(clientId);
              
            }
            catch (Exception ex)
            {
                _logger.LogError("Get Goals by client errorMessage: {0}", ex.Message);
                throw;
            }
        }

        public async Task<bool> AddGoals(Goal goal)
        {
            try
            {
                _logger.LogInformation("Add Goals to the client =>");
                return await ClientsRepository.AddGoalsToClientAsync(goal);

            }
            catch (Exception ex)
            {
                _logger.LogError("Add Goals - errorMessage: {0}", ex.Message);
                throw;
            }
        }

        public async Task<bool> UpdateGoals(Goal goal)
        {
            try
            {
                _logger.LogInformation("Update Goals to the client =>");
                return await ClientsRepository.UpdateClientGoalsAsync(goal);

            }
            catch (Exception ex)
            {
                _logger.LogError("Update Goals - errorMessage: {0}", ex.Message);
                throw;
            }
        }
    }
}
