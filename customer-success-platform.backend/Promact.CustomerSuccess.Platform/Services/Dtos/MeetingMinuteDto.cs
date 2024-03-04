using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class MeetingMinuteDto : IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public  DateTime MeetingDate { get; set; }
        public  int Duration { get; set; }
        public  string MoMLink { get; set; }
        public  string Comments { get; set; }
        public Guid Id { get ; set ; }
    }
}   