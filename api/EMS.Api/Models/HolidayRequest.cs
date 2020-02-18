using System;

namespace EMS.Api.Models
{
    public class HolidayRequest
    {
        public int UserId { get; set; }
        public DateTime From { get; set; }
        public DatePartEnum FromDatePart { get; set; }
        public DateTime To { get; set; }
        public DatePartEnum ToDatePart { get; set; }
        public string Comments { get; set; }
    }
}