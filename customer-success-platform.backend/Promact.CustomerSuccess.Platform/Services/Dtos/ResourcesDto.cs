using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ResourcesDto : IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public string ResourceName { get; set; }
        public string Role { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Comment { get; set; }
        
    }
}
