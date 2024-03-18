using Promact.CustomerSuccess.Platform.Entities;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateEmailValidation
    {
        public string email { get; set; }
        public string password { get; set; }
        public RoleType role { get; set; }
        public bool IsAuthentic { get; set; }
        public Guid Id { get; set; }
    }
}
