using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class RoleBased : AuditedEntity<Guid>
    {
        public Guid id {  get; set; }
        public string name { get; set; }
        public string email {  get; set; }  
        public string password { get; set; }
        public string role { get; set; } 
    }
}
