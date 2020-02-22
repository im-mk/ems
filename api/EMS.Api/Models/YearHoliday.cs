public class YearHoliday
{
    public int Year { get; private set; }
    public int Total { get; private set; }

    public YearHoliday(int year, int total)
    {
        Year = year;
        Total = total;
    }
}