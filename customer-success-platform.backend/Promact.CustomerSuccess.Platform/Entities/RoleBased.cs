using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class RoleBased : AuditedEntity<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public string name { get; set; }
        public string email {  get; set; }  
        public string password { get; set; }
        public RoleType role { get; set; }
        public virtual Project? Project { get; set; }
    }
}
