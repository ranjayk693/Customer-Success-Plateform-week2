using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class EmailSender : Entity<Guid>
    {
        public string Email {  get; set; }  
        public string Password {  get; set; }   
        public string Host {  get; set; }   
        public string Displayname {  get; set; }    
        public int port {  get; set; }  
    }
}
