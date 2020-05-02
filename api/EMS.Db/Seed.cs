using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMS.Domain.Db;
using Microsoft.AspNetCore.Identity;

namespace EMS.Db
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "test",
                        UserName = "test",
                        Email = "test@test.com"
                    },               
                    new AppUser
                    {
                        DisplayName = "bob",
                        UserName = "bob",
                        Email = "bob@bob.com"
                    },
                    new AppUser
                    {
                        DisplayName = "kk",
                        UserName = "kk",
                        Email = "kk@kk.com"
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

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