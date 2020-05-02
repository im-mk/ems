using System.Threading;
using System.Threading.Tasks;
using EMS.Core.Interfaces;
using EMS.Domain.Db;
using EMS.Domain.View;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace EMS.Core.User
{
    public class CurrentUser
    {
        public class Query : IRequest<UserBasic> { }
        public class Handler : IRequestHandler<Query, UserBasic>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly IUserAccessor _userAccessor;

            public Handler(
                UserManager<AppUser> userManager,
                IJwtGenerator jwtGenerator,
                IUserAccessor userAccessor)
            {
                _jwtGenerator = jwtGenerator;
                _userAccessor = userAccessor;
                _userManager = userManager;
            }

            public async Task<UserBasic> Handle(
                Query request, 
                CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUsername());

                return new UserBasic
                {
                    DisplayName = user.DisplayName,
                    Username = user.UserName,
                    Token = _jwtGenerator.CreateToken(user),
                    Image = null
                };
            }
        }
    }
}