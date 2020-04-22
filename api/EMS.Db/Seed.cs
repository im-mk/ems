using System.Collections.Generic;
using System.Linq;
using EMS.Domain.Db;

namespace EMS.Db
{
    public static class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Values.Any())
            {
                var values = new List<Value>
                {
                    new Value { Name = "100" },
                    new Value { Name = "102" },
                    new Value { Name = "104" }
                };

                context.Values.AddRange(values);
            }

            if(!context.YearHolidays.Any())
            {
                var yearHolidays = new List<YearHoliday>
                {
                    new YearHoliday { Year = 2020, Total = 20 },
                    new YearHoliday { Year = 2021, Total = 20 }
                };
                context.YearHolidays.AddRange(yearHolidays);
            }

            if (!context.Holidays.Any())
            {
                var holidays = new List<Holiday>
                {
                    new Holiday
                    {
                        RequestedBy = "MK",
                        HolidayOn = new System.DateTime(2019, 1, 1),
                        DateApproved = new System.DateTime(2019, 1, 1),
                        DateRequested = new System.DateTime(2019, 1, 1),
                        DatePart = "am",
                        ApprovedBy = "Mk"
                    },
                    new Holiday
                    {
                        RequestedBy= "SK",
                        HolidayOn = new System.DateTime(2020, 1, 1),
                        DateApproved = new System.DateTime(2020, 1, 1),
                        DateRequested = new System.DateTime(2020, 1, 1),
                        DatePart = "pm",
                        ApprovedBy = "ABC"
                    }
                };

                context.AddRange(holidays);
            }

            context.SaveChanges();
        }
    }
}