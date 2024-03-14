

using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ProjectBudgetDto: IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public Guid Id { get; set; }
        public ProjectType Type { get; set; }
        public int? DurationInMonths { get; set; }
        public int? BudgetedHours { get; set; }
       
    }
}