using Promact.CustomerSuccess.Platform.Entities;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateStakeHolderDto
    {
        public required Guid ProjectId { get; set; }
        public StakeHolderTitle Title { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string email { get; set; }
    }
}
