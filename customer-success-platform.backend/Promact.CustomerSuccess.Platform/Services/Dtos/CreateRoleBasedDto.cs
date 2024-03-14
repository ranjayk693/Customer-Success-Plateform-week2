namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateRoleBasedDto
    {
        public Guid ProjectId { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string role { get; set; }
    }
}
