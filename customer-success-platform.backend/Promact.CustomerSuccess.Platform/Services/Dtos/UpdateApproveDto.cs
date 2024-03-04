namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateApproveDto
    {
        public int NoOfResources { set; get; }
        public string Role { set; get; }
        public string Availability { set; get; }
        public int Duration { set; get; }
        public int Phase { get; set; }
    }
}
