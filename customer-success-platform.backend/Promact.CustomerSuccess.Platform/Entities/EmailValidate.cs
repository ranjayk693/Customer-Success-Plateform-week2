using Volo.Abp.Domain.Entities;
/**/
namespace Promact.CustomerSuccess.Platform.Entities
{
    public class EmailValidate : Entity<Guid>
    {
        public string email { get; set; }
        public string password { get; set; }
        public RoleType role { get; set; }

        public bool IsAuthentic { get; set; }
    }
}
