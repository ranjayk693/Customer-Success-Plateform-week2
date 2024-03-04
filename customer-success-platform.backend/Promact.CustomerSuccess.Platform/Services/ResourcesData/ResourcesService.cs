using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.ResourcesData
{
    public class ResourcesService : CrudAppService<Resources, ResourcesDto, Guid, PagedAndSortedResultRequestDto, CreateResourceDto, UpdateResourceDto>, IResourcesService
    {
        public ResourcesService(IRepository<Resources, Guid> repository) : base(repository)
        {
        }
    }
}
