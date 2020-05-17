using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EMS.Db;
using EMS.Domain.Db;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace EMS.Core.Holidays
{
    public class List
    {
        public class Query : IRequest<List<Holiday>> 
        { 
            public int Page { get; set; }
            public int Size { get; set; }
            public int Skip 
            {
                get { return Size * (Page-1); }
            }
        }

        public class Handler : IRequestHandler<Query, List<Holiday>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Holiday>> Handle(Query request, CancellationToken cancellationToken)
            {
                var holidays = await _context.Holidays.Take(request.Size).Skip(request.Skip).ToListAsync();
                return holidays;
            }
        }
    }
}