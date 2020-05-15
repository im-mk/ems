import Axios from "axios";
import { GetApiUrl } from "../../env";
import IHoliday from "./types/IHoliday";

export async function GetHolidays(token: string): Promise<IHoliday[]> {

  const url = GetApiUrl() + "/holidays";
 
  const response = await Axios.get<IHoliday[]>(
    url,
    {
      headers: { Authorization: "Bearer " + token}
    });
  return response.data;
}