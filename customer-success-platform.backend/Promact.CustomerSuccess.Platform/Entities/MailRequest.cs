using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class MailRequest : Entity<Guid>
    {
        public string ToEmail {  get; set; }    
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}
