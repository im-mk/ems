using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using EMS.Core.Errors;
using System.Net;
using FluentValidation;
using EMS.Domain.View;
using EMS.Domain.Db;
using EMS.Core.Interfaces;

namespace EMS.Core.User
{
    public class Login
    {
        public class Query : IRequest<UserBasic>
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Query, UserBasic>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly SignInManager<AppUser> _signInManager;
            private readonly IJwtGenerator _jwtGenerator;

            public Handler(
                UserManager<AppUser> userManager, 
                SignInManager<AppUser> signInManager,
                IJwtGenerator jwtGenerator)
            {
                _signInManager = signInManager;
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;
            }

            public async Task<UserBasic> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userManager.FindByEmailAsync(request.Email);

                if (user == null)
                    throw new RestException(HttpStatusCode.Unauthorized);

                var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);

                if (result.Succeeded)
                {
                    //todo: generate token
                    return new UserBasic
                    {
                        DisplayName = user.DisplayName,
                        Token = _jwtGenerator.CreateToken(user),
                        Username = user.UserName,
                        Image = null
                    };
                }

                throw new RestException(HttpStatusCode.Unauthorized);
            }
        }
    }
}