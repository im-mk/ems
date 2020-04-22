using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MediatR;
using EMS.Core.Holidays;

namespace EMS.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HolidaysController : ControllerBase
    {
        private readonly ILogger<HolidaysController> _logger;
        private readonly IMediator _mediator;

        public HolidaysController(
            ILogger<HolidaysController> logger,
            IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // [HttpPost]
        // public bool Post(HolidayRequest request)
        // {
        //     if (request.From.Date > request.To.Date)
        //         return false;

        //     return true;
        // }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EMS.Domain.Db.Holiday>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EMS.Domain.Db.Holiday>> Details(int id)
        {
            return await _mediator.Send(new Details.Query{ Id = id });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await _mediator.Send(new Delete.Command { Id = id });
        }
        // [HttpGet]
        // public async Task<ActionResult<HolidaySummary>> GetSummary(int userId)
        // {
        //     await Task.Delay(10);

        //     return new HolidaySummary(
        //         yearHolidays: new[]
        //         {
        //             new YearHoliday(
        //                 year: 2019,
        //                 total: 22
        //             ),
        //             new YearHoliday(
        //                 year: 2020,
        //                 total: 25
        //             )
        //         },
        //         user: new UserBasic(
        //                     userId: 1,
        //                     title: "Mr",
        //                     firstName: "M",
        //                     middleNames: null,
        //                     lastName: "K"),
        //         holidays: new[]
        //         {
        //             new Holiday(
        //                 dateRequested: DateTime.Today.AddDays(-10).ToShortDateString(),
        //                 holidayOn: DateTime.Today.ToShortDateString(),
        //                 datePart: DatePartEnum.FullDay.Description(),
        //                 approvedBy: "Aamir Abbas",
        //                 dateApproved: DateTime.Today.AddDays(-5).ToShortDateString()),
        //             new Holiday(
        //                 dateRequested: DateTime.Today.AddDays(-30).ToShortDateString(),
        //                 holidayOn: DateTime.Today.AddDays(-20).ToShortDateString(),
        //                 datePart: DatePartEnum.FullDay.Description(),
        //                 approvedBy: "John Major",
        //                 dateApproved: DateTime.Today.AddDays(-25).ToShortDateString())
        //         }
        //     );
        // }
    }
}
