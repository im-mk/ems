using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EMS.Db;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace EMS.Core.Holidays
{
    public class List
    {
        public class Query : IRequest<List<EMS.Domain.View.Holiday>> 
        { 
            public int Page { get; set; }
            public int Size { get; set; }
            public int Skip 
            {
                get { return Size * (Page-1); }
            }
        }

        public class Handler : IRequestHandler<Query, List<EMS.Domain.View.Holiday>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<EMS.Domain.View.Holiday>> Handle(Query request, CancellationToken cancellationToken)
            {
                var holidays = await _context.Holidays
                    .Include(h => h.RequestedBy)
                    .Include(h => h.StatusBy)
                    .Take(request.Size)
                    .Skip(request.Skip)
                    .ToListAsync();

                var result = holidays.Select(holiday => new EMS.Domain.View.Holiday {
                    HolidayId = holiday.HolidayId,
                    RequestedBy = holiday.RequestedBy.DisplayName,
                    DateRequested = holiday.DateRequested.ToShortDateString(),
                    DateFrom = holiday.DateFrom.ToShortDateString(),
                    DateFromPart = holiday.DateFromPart,
                    DateTo = holiday.DateTo.ToShortDateString(),
                    DateToPart = holiday.DateToPart,
                    Comments = holiday.Comments,
                    Status = holiday.Status,
                    StatusBy = holiday.StatusBy.DisplayName,
                    StatusDate = holiday.StatusDate.ToShortDateString()
                });

                return result.ToList();
            }
        }
    }
}