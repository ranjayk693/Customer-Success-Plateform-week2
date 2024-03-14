using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class AuditHistory : Entity<Guid>
    {
        [ForeignKey("Project")]
        public required Guid ProjectId { get; set; }
        public DateTime DateofAudit { get; set; }
        public string ReviewedBy {  get; set; }
        public string Status { get; set; }
        public string ReviewedSection { get; set; }
        public string CommentQueries {  get; set; } 
        public string ActionItem { get; set; }
        public virtual Project? Project { get; set; }
    }
}
