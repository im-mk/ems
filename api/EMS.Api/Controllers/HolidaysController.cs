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
                year: 2019,
                total: 25,
                user: new UserBasic(
                            userId: 1,
                            title: "Mr",
                            firstName: "M",
                            middleNames: null,
                            lastName: "K"),
                holidays: new[] {
                    new Holiday(
                        holidayOn: DateTime.Now,
                        datePart: DatePartEnum.FullDay,
                        approvedBy: new UserShort(userId: 2, fullName: "Aamir Abbas"))
                }
            );
        }
    }
}
