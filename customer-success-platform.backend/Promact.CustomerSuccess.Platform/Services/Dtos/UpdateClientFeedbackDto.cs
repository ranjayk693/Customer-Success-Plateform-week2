namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateClientFeedbackDto
    {
        public Guid ProjectId { get; set; }
        public FeedbackType FeedbackType { get; set; }
        public DateTime DateReceived { get; set; }
        public required string Details { get; set; }
        public string ActionTaken { get; set; }
        public DateTime ClosureDate { get; set; }
    }
}
