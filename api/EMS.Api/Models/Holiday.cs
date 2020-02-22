using System;

namespace EMS.Api.Models
{
    public class Holiday
    {
        public Holiday(string holidayOn, string datePart, string approvedBy)
        {
            HolidayOn = holidayOn;
            DatePart = datePart;
            ApprovedBy = approvedBy;
        }

        public string HolidayOn { get; private set; }
        public string DatePart { get; private set; }
        public string ApprovedBy { get; private set; }
    }
}