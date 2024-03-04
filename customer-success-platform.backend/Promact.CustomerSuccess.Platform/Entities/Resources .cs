﻿using NUglify;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class Resources : AggregateRoot<Guid>
    {
        public string ResourceName {  get; set; }
        public string Role {  get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Comment {  get; set; }
    }
}