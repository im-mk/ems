using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using EMS.Db;
using EMS.Domain.Db;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace EMS.Core.Documents
{
    public class List
    {
        public class Query : IRequest<List<Document>> { }
        public class Handler : IRequestHandler<Query, List<Document>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Document>> Handle(Query request, CancellationToken cancellationToken)
            {
                var documents = await _context.Documents.ToListAsync();
                return documents;
            }
        }
    }
}