using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ApproveTeamDto:IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public int NoOfResources { set; get; }
        public string Role { set; get; }
        public string Availability { set; get; }
        public int Duration { set; get; }
        public int Phase { get; set; }
    }
}
