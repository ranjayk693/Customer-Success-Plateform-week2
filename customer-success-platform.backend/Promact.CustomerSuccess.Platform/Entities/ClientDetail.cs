using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ClientDetail: Entity<Guid>
    {
        public string name { get; set; }
        public string email { get; set; }

        [ForeignKey("Project")]
        public required Guid ProjectId { get; set; }
        public virtual Project? Project { get; set; }
    }
}
