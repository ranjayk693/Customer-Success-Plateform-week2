using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
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
        private readonly IRepository<RoleBased, Guid> _roleReposatory;

        public RoleBasedService(IRepository<RoleBased, Guid> repository, IRepository<RoleBased, Guid> role) : base(repository)
        {
            _roleReposatory = role;
        }





        [HttpPost]
        public async Task<Response> ValidateEmail(EmailValidateDto input)
        {
            var roles = await _roleReposatory.FirstOrDefaultAsync(rp => rp.email == input.email && (rp.password == input.password || input.IsAuthentic));
            if (roles == null)
            {
                return new Response
                {
                    message = "You are not authentic user"
                } ;
            }
            else
            {
                var response = new Response
                {
                    message = "You are  authentic user",
                    isAuthentic = true,
                    role = roles.role,
                    email = input.email
                };
                return response;
            }
            
        }
        public class Response
        {
            public string message { get; set; }
            public string email { get; set; }
            public RoleType role { get; set; }
            public bool isAuthentic { get; set; } = false;
        }

    }
}
