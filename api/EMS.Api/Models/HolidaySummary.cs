using System.Collections.Generic;

namespace EMS.Api.Models
{
    public class HolidaySummary
    {
        public HolidaySummary(IEnumerable<YearHoliday> yearHolidays, IEnumerable<Holiday> holidays, UserBasic user)
        {
            YearHolidays = yearHolidays;
            Holidays = holidays;
            User = user;
        }

        public UserBasic User { get; private set; }
        public IEnumerable<YearHoliday> YearHolidays { get; private set; }
        public IEnumerable<Holiday> Holidays { get; private set; }
    }
}