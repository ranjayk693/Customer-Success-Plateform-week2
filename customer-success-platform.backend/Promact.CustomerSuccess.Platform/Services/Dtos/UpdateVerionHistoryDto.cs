namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateVerionHistoryDto
    {
        public required Guid ProjectId { get; set; }
        public int Version { get; set; }
        public string Type { get; set; }
        public string Change { get; set; }
        public string ChangeReason { get; set; }
        public string CreatedBy { get; set; }
        public DateTime RevisionDate { get; set; }
        public DateTime ApprovalDate { get; set; }
        public string ApprovedBy { get; set; }
    }
}
