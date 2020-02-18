using System.Collections.Generic;

namespace EMS.Api.Models
{
    public class HolidaySummary
    {
        public HolidaySummary(int year, int total, IEnumerable<Holiday> holidays, UserBasic user)
        {
            Year = year;
            Total = total;
            Holidays = holidays;
            User = user;
        }

        public UserBasic User { get; private set; }
        public int Year { get; set; }
        public int Total { get; private set; }
        public IEnumerable<Holiday> Holidays { get; private set; }
    }
}