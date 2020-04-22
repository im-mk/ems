using System;
using System.Threading;
using System.Threading.Tasks;
using EMS.Db;
using MediatR;

namespace EMS.Core.Holidays
{
    public class Edit
    {
        public class Command : IRequest 
        {
            public int Id { get; set; }
            public string RequestedBy { get; set; }
            public DateTime DateRequested { get; set; }
            public DateTime HolidayOn { get; set; }
            public string DatePart { get; set; }
            public string ApprovedBy { get; set; }
            public DateTime? DateApproved { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var holiday = await _context.Holidays.FindAsync(request.Id);

                if (request == null)
                    throw new Exception("Could not find activity");

                holiday.RequestedBy = request.RequestedBy ?? holiday.RequestedBy;
                holiday.DateRequested = request.DateRequested.IsDefault() ? holiday.DateRequested : request.DateRequested;
                holiday.HolidayOn = request.HolidayOn.IsDefault() ? holiday.HolidayOn : request.HolidayOn;
                holiday.DatePart = request.DatePart?? holiday.DatePart;
                holiday.ApprovedBy = request.ApprovedBy ?? holiday.ApprovedBy;
                holiday.DateApproved = request.DateApproved ?? holiday.DateApproved;
                
                var success = await _context.SaveChangesAsync() > 0;
                
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}