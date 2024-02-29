using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class Client_Feedback :Entity<int>
    {
        public string FeedBackType { get; set; }
        public DateTime DateReceived { get; set; }
        public string DetailedFeedback { get; set; }
        public string ActionItem { get; set; }
        public DateTime ClosureData { get; set; }
    }
}
