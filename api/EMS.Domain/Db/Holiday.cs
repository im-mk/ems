using System;

namespace EMS.Domain.Db
{
    public class Holiday
    {
        public int Id { get; set; }
        public string RequestedBy { get; set; }
        public DateTime DateRequested { get; set; }
        public DateTime HolidayOn { get; set; }
        public string DatePart { get; set; }
        public string ApprovedBy { get; set; }
        public DateTime? DateApproved { get; set; }
    }
}