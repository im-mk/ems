using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMS.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EMS.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HolidaysController : ControllerBase
    {
        private readonly ILogger<HolidaysController> _logger;

        public HolidaysController(ILogger<HolidaysController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public bool Post(HolidayRequest request)
        {
            if (request.From.Date > request.To.Date)
                return false;

            return true;
        }

        [HttpGet]
        public HolidaySummary GetSummary(int userId)
        {
            return new HolidaySummary(
                yearHolidays: new[]
                {
                    new YearHoliday(
                        year: 2019,
                        total: 22
                    ),
                    new YearHoliday(
                        year: 2020,
                        total: 25
                    )
                },
                user: new UserBasic(
                            userId: 1,
                            title: "Mr",
                            firstName: "M",
                            middleNames: null,
                            lastName: "K"),
                holidays: new[]
                {
                    new Holiday(
                        dateRequested: DateTime.Today.AddDays(-10).ToShortDateString(),
                        holidayOn: DateTime.Today.ToShortDateString(),
                        datePart: DatePartEnum.FullDay.Description(),
                        approvedBy: "Aamir Abbas",
                        dateApproved: DateTime.Today.AddDays(-5).ToShortDateString()),
                    new Holiday(
                        dateRequested: DateTime.Today.AddDays(-30).ToShortDateString(),
                        holidayOn: DateTime.Today.AddDays(-20).ToShortDateString(),
                        datePart: DatePartEnum.FullDay.Description(),
                        approvedBy: "John Major",
                        dateApproved: DateTime.Today.AddDays(-25).ToShortDateString())
                }
            );
        }
    }
}
