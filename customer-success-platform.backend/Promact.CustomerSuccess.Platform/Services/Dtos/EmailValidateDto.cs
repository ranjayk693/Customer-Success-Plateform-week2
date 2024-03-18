using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class EmailValidateDto
    {
        public string email { get; set; }
        public string password { get; set; }
        
        public bool IsAuthentic {  get; set; }

        

        public object?[] GetKeys()
        {
            throw new NotImplementedException();
        }
    }
}
