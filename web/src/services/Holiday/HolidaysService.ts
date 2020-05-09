import Axios from "axios";
import { GetApiUrl } from "../../env";
import IHoliday from "./types/IHoliday";

export async function GetHolidays(token: string): Promise<IHoliday[]> {

  const getRecordsUrl = GetApiUrl() + "/holidays";
  debugger;
  const response = await Axios.get<IHoliday[]>(
    getRecordsUrl,
    {
      headers: { Authorization: "Bearer " + token}
    });
  return response.data;
}