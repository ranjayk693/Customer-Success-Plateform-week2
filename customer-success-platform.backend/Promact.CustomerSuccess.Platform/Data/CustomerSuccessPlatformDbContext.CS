using Microsoft.EntityFrameworkCore;
using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.EntityFrameworkCore;

namespace Promact.CustomerSuccess.Platform.Data
{
    public class CustomerSuccessPlatformDbContext : AbpDbContext<CustomerSuccessPlatformDbContext>
    {
        public CustomerSuccessPlatformDbContext(DbContextOptions<CustomerSuccessPlatformDbContext> options) : base(options)
        {
        }

        public DbSet<Client_Feedback> ClientFeedbacks { get; set; }
        
    }
}
