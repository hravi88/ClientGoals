using Api.Clients.Data;
using Api.Clients.Dtos;
using Api.Clients.Proxies;
using AutoMapper;

namespace Api.Clients.Services
{
    public interface IClientService
    {
        Task<ServiceResponse<ClientResponseDto>> GetClients();
        Task<ServiceResponse<GoalResponseDto>> GetGoalsByClient(int clientId);
        Task<ServiceResponse<bool>> AddGoalsToClientAsync(GoalRequestDto goal);
        Task<ServiceResponse<bool>> UpdateClientGoalsAsync(GoalRequestDto goal);
    }

    public class ClientService: IClientService
    {
        private readonly IClientsProxy _clientProxy;
        private readonly ILogger<ClientService> _logger;
        private readonly IMapper _mapper;

        public ClientService(ILogger<ClientService> logger,
            IClientsProxy clientProxy,
            IMapper mapper
            )
        {
            _logger = logger;
            _clientProxy = clientProxy;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<ClientResponseDto>> GetClients()
        {
            var response = await _clientProxy.GetClients();

            return new ServiceResponse<ClientResponseDto>()
            {
                Status = Api.Clients.Dtos.Constants.ApiResponseStatus.Success,
                Data = _mapper.Map<IEnumerable<ClientResponseDto>>(response)
            };
        }

        public async Task<ServiceResponse<GoalResponseDto>> GetGoalsByClient(int clientId)
        {
            var response = await _clientProxy.GetGoalsByClient(clientId);
           
            return new ServiceResponse<GoalResponseDto>()
            {
                Status = Api.Clients.Dtos.Constants.ApiResponseStatus.Success,
                Data = _mapper.Map<IEnumerable<GoalResponseDto>>(response),
            };
        }

        public async Task<ServiceResponse<bool>> AddGoalsToClientAsync(GoalRequestDto goal)
        {
            if (goal.ClientId == 0)
            {
                throw new ArgumentException("invalid request");
            }

            //Verify Server side to avoid unintended save to db.
            // Sanitization of data is also done in client side as well
            var client = _clientProxy.GetClientById(goal.ClientId);
            if (client == null || client?.ClientId == 0)
            {
                _logger.LogError("Client does not exist invalid request");
                throw new ArgumentException("Client does not exist invalid request");
            }

            var goalRequest = _mapper.Map<Goal>(goal);
            var isUpdated = await _clientProxy.AddGoals(goalRequest);

            return new ServiceResponse<bool>()
            {
                Status = Api.Clients.Dtos.Constants.ApiResponseStatus.Success,
                Data = new List<bool>(){ isUpdated } 
            };
        }

        public async Task<ServiceResponse<bool>> UpdateClientGoalsAsync(GoalRequestDto goal)
        {
            var client = _clientProxy.GetClientById(goal.ClientId);
            if (client == null || client?.ClientId == 0)
            {
                _logger.LogError("Client does not exist invalid request");
                throw new ArgumentException("Client does not exist invalid request");
            }

            var goalRequest = _mapper.Map<Goal>(goal);
            var isUpdated = await _clientProxy.UpdateGoals(goalRequest);

            return new ServiceResponse<bool>()
            {
                Status = Api.Clients.Dtos.Constants.ApiResponseStatus.Success,
                Data = new List<bool>() { isUpdated }
            };
        }
    }
}
