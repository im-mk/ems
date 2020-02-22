import IHoliday from "./IHoliday";
import ISummary from './ISummary';

export default class Summary implements ISummary {
    public Holidays: IHoliday[] = [];
}