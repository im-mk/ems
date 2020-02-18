using System;

namespace EMS.Api.Models
{
    public class Holiday
    {
        public Holiday(DateTime holidayOn, DatePartEnum datePart, UserShort approvedBy)
        {
            HolidayOn = holidayOn;
            DatePart = datePart;
            ApprovedBy = approvedBy;
        }

        public DateTime HolidayOn { get; private set; }
        public DatePartEnum DatePart { get; private set; }
        public UserShort ApprovedBy { get; private set; }
    }
}