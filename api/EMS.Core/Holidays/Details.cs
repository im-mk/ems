using System.Net;
using System.Threading;
using System.Threading.Tasks;
using EMS.Core.Errors;
using EMS.Db;
using EMS.Domain.Db;
using MediatR;

namespace EMS.Core.Holidays
{
    public class Details
    {
        public class Query : IRequest<Holiday>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Holiday>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Holiday> Handle(Query request, CancellationToken cancellationToken)
            {
                var holiday = await _context.Holidays.FindAsync(request.Id);
                
                if (holiday == null)
                    throw new RestException(HttpStatusCode.NotFound, new { holiday = "Not found" });

                return holiday;
            }
        }
    }
}