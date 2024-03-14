namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateProjectBudgetDto
    {
        public Guid ProjectId { get; set; }
        public ProjectType Type { get; set; }
        public int? DurationInMonths { get; set; }
        public int? BudgetedHours { get; set; }
    }
}
