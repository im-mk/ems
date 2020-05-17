import Axios from "axios";
import { GetApiUrl } from "../../env";
import IHoliday from "./types/IHoliday";

export async function Get(token: string, page: number, size: number): Promise<IHoliday[]> {

  const url = GetApiUrl() + "/holidays?page=" + page + "&size=" + size;
 
  const response = await Axios.get<IHoliday[]>(
    url,
    {
      headers: { Authorization: "Bearer " + token}
    });
  return response.data;
}