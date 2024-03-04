﻿using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ProjectUpdateDto: IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public string GeneralUpdate { get; set; }
       
    }
}
