using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Promact.CustomerSuccess.Platform.Services.EmailServices;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.projects
{
    public class ProjectService : CrudAppService<Project, ProjectDto, Guid, PagedAndSortedResultRequestDto, CreateProjectDto, UpdateProjectDto>, IProjectService
    {
        private readonly IEmailService _emailService; 
        public ProjectService(IRepository<Project, Guid> repository,IEmailService emailService) : base(repository)
        {
            _emailService = emailService;
        }


         public override Task<ProjectDto> CreateAsync(CreateProjectDto input)
         {
            
            EmailDto emailDto = new EmailDto
            {
                To="ranjay.kumar110519@marwadiuniversity.ac.in",
                Subject= "Project Created Notification",
                Body = $"Dear Admin,Project name {input.Name} has been created please with desription {input.Description}"

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
