using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Promact.CustomerSuccess.Platform.Services.EmailServices;
using System.Xml.Linq;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.AuditHistories
{
    public class AuditHistoryService : CrudAppService<AuditHistory, AuditHistoryDto, Guid, PagedAndSortedResultRequestDto, CreateAuditHistoryDto, UpdateAuditHistoryDto>, IAuditHistory
    {
        private readonly IEmailService _emailService;
        private readonly IRepository<StakeHolder,Guid> _stakeHolderRepository;
        public AuditHistoryService(IRepository<AuditHistory, Guid> repository,IEmailService email, IRepository<StakeHolder, Guid> stakeHolderRepository) : base(repository)
        {
            _emailService = email;
            _stakeHolderRepository = stakeHolderRepository;
        }

        public override async Task<AuditHistoryDto> UpdateAsync(Guid id, UpdateAuditHistoryDto input)
        {

            var stakeholder = await _stakeHolderRepository.GetListAsync(sh => sh.ProjectId == input.ProjectId);
            if (stakeholder != null)
            {
                foreach(var sh in stakeholder)
                {
                    EmailDto emailDto = new EmailDto
                    {
                        To = sh.email,
                        Subject = "Update Audit History Notification",
                        Body = bodyMessage(sh.Name)

                    };
                    try
                    {
                        _emailService.SendEmailAsync(emailDto);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.ToString());
                    }
                }
            }
            return await base.UpdateAsync(id, input);
        }
        public override async Task<AuditHistoryDto> CreateAsync(CreateAuditHistoryDto input)
        {
            var stakeholder = await _stakeHolderRepository.GetListAsync(sh => sh.ProjectId == input.ProjectId);
            if (stakeholder != null)
            {
                foreach (var sh in stakeholder)
                {
                    EmailDto emailDto = new EmailDto
                    {
                        To = sh.email,
                        Subject = "Created Audit History Notification",
                        Body = bodyMessage(sh.Name)

                    };
                    try
                    {
                        _emailService.SendEmailAsync(emailDto);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.ToString());
                    }
                }
            }
            return await base.CreateAsync(input);
        }

        public string bodyMessage(string name)
        {
            return "<style>.content{border:1px solid black}</style>" +
                "<section class='content'> " +
                $"<p>Hello {name}</p>"+
                "<br/>"+
                "<br/>" +
                "<p>Please note that audit has been completed and here is the audit summary:</p>" +
                "<p>[Audit History Table Row Updated]</p>" +
                "<br/>" +
                "<br/>" +
                "Location : <a href='http://localhost:4200/'>Click Here to redirent the page </a>" +
                "<br/>" + "<br/>" +
                "<p>Thanks and Regards</p>" +
                "<p>Promact Infotech Pvt Ltd"+
                "</section>";

        }
    }
}
