namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateResourceDto
    {
        public string ResourceName { get; set; }
        public string Role { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Comment { get; set; }
    }
}
