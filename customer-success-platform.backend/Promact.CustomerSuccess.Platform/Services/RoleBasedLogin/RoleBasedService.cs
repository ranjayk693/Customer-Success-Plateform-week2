using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.RoleBasedLogin
{
    public class RoleBasedService : CrudAppService<RoleBased, RoleBasedDto, Guid, PagedAndSortedResultRequestDto, CreateRoleBasedDto, UpdateRoleBasedDto>, IRoleBasedService
    {
        public RoleBasedService(IRepository<RoleBased, Guid> repository) : base(repository)
        {
        }
    }
}
