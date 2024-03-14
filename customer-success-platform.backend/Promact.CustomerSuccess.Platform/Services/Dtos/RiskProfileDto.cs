using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class RiskProfileDto : IEntityDto<Guid>
    {
       public Guid Id { get; set; }   
        public Guid ProjectId { get; set; }
        public RiskType RiskType { get; set; }
        public string description { get; set; }
        public RiskSeverity Severity { get; set; }
        public RiskImpact Impact { get; set; }

        public string RemedialSteps { get; set; }
        public string Status { get; set; }

        public DateOnly ClosureDate { get; set; }
    }
}