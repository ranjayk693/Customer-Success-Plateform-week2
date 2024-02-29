using Microsoft.AspNetCore.Mvc;
using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Domain.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Promact.CustomerSuccess.Platform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientFeedbackController : ControllerBase
    {
        private IRepository<ClientFeedback> DB_Data;

        public ClientFeedbackController(IRepository<ClientFeedback> clientFeedbackRepository)
        {
            DB_Data = clientFeedbackRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientFeedback>>> GetClientFeedbacks()
        {
            return await DB_Data.GetListAsync();
        }

        //[HttpPost]
        //public async Task<ActionResult<IEnumerable<ClientFeedback>>> CreateClientFeedback(ClientFeedback clientFeedback)
        //{
        //    await DB_Data.InsertAsync(clientFeedback);
        //}

        [HttpPost]
        public async Task<ActionResult<ClientFeedback>> CreateClientFeedback(ClientFeedback clientFeedback)
        {
            await DB_Data.InsertAsync(clientFeedback);
            //return CreatedAtAction(nameof(GetClientFeedback), new { id = clientFeedback.Id }, clientFeedback);
            return Ok("updated");
        }


    }
}
