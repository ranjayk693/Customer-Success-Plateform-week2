using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Application.Services;

namespace Promact.CustomerSuccess.Platform.Services.EmailServices
{
    public interface IEmailService:IApplicationService
    {
        Task SendEmailAsync(EmailDto request);
    }
}
