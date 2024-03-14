using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class StakeHolderDto : IEntityDto<Guid>
    {
        public Guid Id { get ; set; }
        public required Guid ProjectId { get; set; }
        public StakeHolderTitle Title { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string email { get; set; }
    }
}
