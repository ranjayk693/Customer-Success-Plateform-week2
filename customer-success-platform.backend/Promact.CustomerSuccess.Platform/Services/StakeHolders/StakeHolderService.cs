using System;
using System.Threading.Tasks;
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
        private readonly IRepository<RoleBased, Guid> _roleBasedRepository;

        public StakeHolderService(IRepository<StakeHolder, Guid> repository, IEmailService emailService, IRepository<RoleBased, Guid> roleBasedRepository) : base(repository)
        {
            _emailService = emailService;
            _roleBasedRepository = roleBasedRepository;
        }

        public override async Task<StakeHolderDto> CreateAsync(CreateStakeHolderDto input)
        {
            // First, create the stakeholder
            var stakeHolderDto = await base.CreateAsync(input);

            RoleType roleType=RoleType.admin;
            bool flag = false;

            if (input.Title == StakeHolderTitle.ProjectManager)
            {
                roleType = RoleType.manager;
                flag = true;
            }
            else if (input.Title == StakeHolderTitle.Client)
            {
                roleType = RoleType.client;
                flag = true;
            }
            else
            {
                flag  = false;
            }

            if (flag)
            {
                var roleBasedEntity = new RoleBased
                {
                    ProjectId = input.ProjectId,
                    name = input.Name,
                    email = input.email,
                    password = "",
                    role = roleType
                };

                await _roleBasedRepository.InsertAsync(roleBasedEntity);
            }

            // Send email to the stakeholder
            EmailDto emailDto = new EmailDto
            {
                To = input.email,
                Subject = $"Project is Created",
                Body = $"<h1>Dear {input.Name},<br/></h1>" +
                $"<p>You are now a stakeholder of the assigned project. Please check out the dashboard of the Customer Success Platform.</p>" +
                "<h4>Thanks and Regards</h4>" +
                "<h4>Promact Infotech</h4>"
            };

            try
            {
                await _emailService.SendEmailAsync(emailDto);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return stakeHolderDto;
        }
    }
}
