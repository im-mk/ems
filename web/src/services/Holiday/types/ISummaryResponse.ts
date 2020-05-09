import IUser from "./IUserResponse";
import IYearHolidays from "./IYearHolidaysResponse";
import IHoliday from "./IHolidayResponse";

export default interface ISummaryResponse {
    user: IUser;
    yearHolidays: IYearHolidays;
    holidays: IHoliday[];
}