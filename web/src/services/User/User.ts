import Axios from "axios";
import { GetApiUrl } from "../../env";
import ILogin from "./ILogin";

export default async function Login(email: string, password: string): Promise<ILogin> {

  const loginUrl = GetApiUrl() + "/user/login";
  
  const response = await Axios.post<ILogin>(loginUrl, {
    email: email,
    password: password
  });
  return response.data;
}