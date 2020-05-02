using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using EMS.Core.Errors;
using EMS.Db;
using FluentValidation;
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

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.RequestedBy).NotEmpty();
                RuleFor(x => x.DateRequested).NotEmpty();
                RuleFor(x => x.HolidayOn).NotEmpty();
                RuleFor(x => x.DatePart).NotEmpty();                
            }
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

                if (holiday == null)
                    throw new RestException(HttpStatusCode.NotFound, new { holiday = "Not found" });

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