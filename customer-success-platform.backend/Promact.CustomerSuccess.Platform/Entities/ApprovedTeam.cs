using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ApprovedTeam : AggregateRoot<Guid>
    {
        
        public int NoOfResources { set; get; }
        public string Role {  set; get; }
        public string Availability {  set; get; }
        public int Duration {  set; get; }  
        public int Phase { get; set; }
        [ForeignKey(nameof(Project))]
        public required Guid ProjectId { get; set; }
        public virtual Project? Project { get; set; }
    }
}
