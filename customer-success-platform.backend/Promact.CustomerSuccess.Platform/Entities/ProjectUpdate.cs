using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ProjectUpdate : AggregateRoot<Guid>
    {
        [ForeignKey("Project")]
        public Guid ProjectId { get; set; }
        public DateTime Date { get; set; }
        public string GeneralUpdate {  get; set; }
        public virtual Project? Project { get; set; }

    }
}
