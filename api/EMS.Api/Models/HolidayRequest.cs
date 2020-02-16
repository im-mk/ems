using System;

namespace EMS.Api.Models
{
    public class HolidayRequest
    {
        public DateTime From { get; set; }
        public string FromAmPm { get; set; }
        public DateTime To { get; set; }
        public string ToAmPm { get; set; }
    }
}