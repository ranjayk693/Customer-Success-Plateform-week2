using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Promact.CustomerSuccess.Platform.Services.EmailServices;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.StakeHolders
{
    public class StakeHolderService : CrudAppService<StakeHolder, StakeHolderDto, Guid, PagedAndSortedResultRequestDto, CreateStakeHolderDto, UpdateStakeHolderDto>, IStakeHolderService
    {
        private readonly IEmailService _emailService;

        public StakeHolderService(IRepository<StakeHolder, Guid> repository,IEmailService emailService) : base(repository)
        {
            _emailService = emailService;
        }
        public override Task<StakeHolderDto> CreateAsync(CreateStakeHolderDto input)
        {

            EmailDto emailDto = new EmailDto
            {
                To = input.email,
                Subject = $"Project is Created",
                Body = $"<h1>Dear {input.Name},<br/></h1>" +
                $"<p>You are now stakeholder of the assigned project please checkout the dashboard of Customer sucess platefrom</p>"+
                "<h4>Thanks and Regard</h4>"+
                "<h4>Promact Infotech</h4>"
            };

            try
            {
                _emailService.SendEmailAsync(emailDto);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return base.CreateAsync(input);
        }

      
       
    }
}
