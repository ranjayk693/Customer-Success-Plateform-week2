namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateAuditHistoryDto
    {
        public required Guid ProjectId { get; set; }
        public DateTime DateofAudit { get; set; }
        public string ReviewedBy { get; set; }
        public string Status { get; set; }
        public string ReviewedSection { get; set; }
        public string CommentQueries { get; set; }
        public string ActionItem { get; set; }
    }
}
