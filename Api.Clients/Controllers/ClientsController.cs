using Api.Clients.Dtos;
using Api.Clients.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Clients.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientsController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        [Route("basicview")]
        [ProducesResponseType(typeof(ServiceResponse<ClientResponseDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> GetClients()
        {
            var response = await _clientService.GetClients();
            return Ok(response);
        }


        [HttpPost]
        [Route("goals")]
        [ProducesResponseType(typeof(ServiceResponse<GoalResponseDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        // GetGoals by clientId is passed in request body through safe post call
        public async Task<ActionResult> GetGoalsByClient([FromBody] int clientId)
        {
            var response = await _clientService.GetGoalsByClient(clientId);
            return Ok(response);
        }

        [HttpPost]
        [Route("addGoals")]
        [ProducesResponseType(typeof(ServiceResponse<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> AddGoalsToClient([FromBody] GoalRequestDto goal)
        {
            var response = await _clientService.AddGoalsToClientAsync(goal);
            return Ok(response);
        }


        [HttpPut]
        [Route("updateGoals")]
        [ProducesResponseType(typeof(ServiceResponse<bool>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> UpdateClientGoals([FromBody] GoalRequestDto goal)
        {
            var response = await _clientService.UpdateClientGoalsAsync(goal);
            return Ok(response);
        }
    }
}