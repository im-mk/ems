using Microsoft.EntityFrameworkCore;
using EMS.Domain.Db;

namespace EMS.Db
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }
        public DbSet<Holiday> Holidays { get; set; }
        public DbSet<YearHoliday> YearHolidays { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
            .Entity<YearHoliday>()
            .HasKey(c => c.Year);
        }
    }
}