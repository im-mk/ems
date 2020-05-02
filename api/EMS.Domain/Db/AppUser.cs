using Microsoft.AspNetCore.Identity;

namespace EMS.Domain.Db
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
    }
}