import Axios from "axios";
// import { GetApiUrl } from "../../env";
// import ISummaryResponse from './types/ISummaryResponse';
// import IHoliday from "../../types/IHoliday";
// import ISummary from "../../types/ISummary";

// export async function GetSummary(userId: number): Promise<ISummary> {

//   const getRecordsUrl = GetApiUrl() + "/holidays?UserId=" + userId;

//   return await Axios.get<ISummaryResponse>(getRecordsUrl)
//     .then(response => {
//       return ProcessResponse(response.data);
//     });
// }

// function ProcessResponse(data: ISummaryResponse): ISummary {

//   debugger;
//   const holidays: IHoliday[] = [];

//   for (const holiday of data.holidays) {
//     const h: IHoliday = {
//       ApprovedBy: holiday.approvedBy,
//       Date: holiday.holidayOn + ' ' + holiday.datePart,
//       DateRequested: holiday.dateRequested,
//       DateApproved: holiday.dateApproved
//     }
//     holidays.push(h);
//   }

//   return { Holidays: holidays };
// }