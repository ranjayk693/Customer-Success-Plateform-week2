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
                Subject = "New Project is assigned",
                Body = "Project is created"
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
