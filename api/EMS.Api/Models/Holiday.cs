using System;

namespace EMS.Api.Models
{
    public class Holiday
    {
        public Holiday(string holidayOn, string datePart, string approvedBy, string dateRequested, string dateApproved)
        {
            HolidayOn = holidayOn;
            DatePart = datePart;
            ApprovedBy = approvedBy;
            DateRequested = dateRequested;
            DateApproved = dateApproved;
        }

        public string DateRequested { get; private set; }
        public string HolidayOn { get; private set; }
        public string DatePart { get; private set; }
        public string ApprovedBy { get; private set; }
        public string DateApproved { get; private set; }
    }
}