using System;
using System.Threading;
using System.Threading.Tasks;
using EMS.Db;
using MediatR;

namespace EMS.Core.Holidays
{
    public class Delete
    {
        public class Command : IRequest 
        {
            public int Id { get; set; }
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

                _context.Holidays.Remove(holiday);

                var success = await _context.SaveChangesAsync() > 0;
                
                if (success) 
                    return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}