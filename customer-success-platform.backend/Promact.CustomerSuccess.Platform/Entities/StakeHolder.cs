using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class StakeHolder:AuditedAggregateRootWithUser<Guid, ApplicationUser>
    {
        [ForeignKey("Project")]
        public required Guid ProjectId { get; set; }
        public StakeHolderTitle Title { get; set; } 
        public string Name { get; set; }
        public string Contact { get; set; }
        public string email { get; set; }
        public virtual Project? Project { get; set; }
    }
}
