using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class VersionHistory : Entity<Guid>
    {
        [ForeignKey("Project")]
        public required Guid ProjectId { get; set; }
        public int Version { get; set; }
        public string Type { get; set; }    
        public string Change {  get; set; } 
        public string ChangeReason {  get; set; }  
        public string CreatedBy {  get; set; }  
        public DateTime RevisionDate { get; set; }  
        public DateTime ApprovalDate {  get; set; } 
        public string ApprovedBy { get; set; }
        public virtual Project? Project { get; set; }
    }
}
