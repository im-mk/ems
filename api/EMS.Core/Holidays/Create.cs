using System;
using System.Threading;
using System.Threading.Tasks;
using EMS.Db;
using EMS.Domain.Db;
using MediatR;
using FluentValidation;

namespace EMS.Core.Holidays
{
    public class Create
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
                var holiday = new Holiday
                {
                    Id = request.Id,
                    RequestedBy = request.RequestedBy,
                    DateRequested = request.DateRequested,
                    HolidayOn = request.HolidayOn,
                    DatePart = request.DatePart,
                    ApprovedBy = request.ApprovedBy,
                    DateApproved = request.DateApproved
                };

                _context.Holidays.Add(holiday);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}