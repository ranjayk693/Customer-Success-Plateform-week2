﻿namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateProjectUpdateDto
    {
        public Guid ProjectId { get; set; }
        public DateTime Date { get; set; }
        public string GeneralUpdate { get; set; }
    }
}
