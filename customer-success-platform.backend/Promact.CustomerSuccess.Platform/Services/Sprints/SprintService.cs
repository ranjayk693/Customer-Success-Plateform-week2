﻿using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.Sprints
{
    public class SprintService : CrudAppService<Sprint, SprintDto, Guid, PagedAndSortedResultRequestDto, CreateSprintDto, UpdateSprintDto>, ISprintService
    {
        public SprintService(IRepository<Sprint, Guid> repository) : base(repository)
        {
        }
    }
}
