﻿using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.AuditHistories
{
    public class AuditHistoryService : CrudAppService<AuditHistory, AuditHistoryDto, Guid, PagedAndSortedResultRequestDto, CreateAuditHistoryDto, UpdateAuditHistoryDto>, IAuditHistory
    {
        public AuditHistoryService(IRepository<AuditHistory, Guid> repository) : base(repository)
        {
        }
    }
}
