﻿namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateClientFeedbackDto
    {
        public Guid ProjectId { get; set; }
        public DateTime FeedbackDate { get; set; }
        public FeedbackType FeedbackType { get; set; }
        public required string Details { get; set; }
    }
}
