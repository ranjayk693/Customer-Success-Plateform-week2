using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.ApproveTeams
{
    public class ApproveTeamService : CrudAppService<ApprovedTeam, ApproveTeamDto, Guid, PagedAndSortedResultRequestDto, CreateApproveTeamDto, UpdateApproveDto>, IApproveTeamService
    {
        public ApproveTeamService(IRepository<ApprovedTeam, Guid> repository) : base(repository)
        {
        }
    }
}
