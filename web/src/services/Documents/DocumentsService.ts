import Axios from "axios";
import { GetApiUrl } from "../../env";
import IDocument from "./types/IDocument";
import FileDownload from 'js-file-download';

export async function Get(token: string): Promise<IDocument[]> {

  const getRecordsUrl = GetApiUrl() + "/documents";

  const response = await Axios.get<IDocument[]>(
    getRecordsUrl,
    {
      headers: { Authorization: "Bearer " + token}
    });
  return response.data;
}

export async function Create(token: string, selectedFile: any, title: string, comment: string): Promise<boolean> {

  const getRecordsUrl = GetApiUrl() + "/documents";

  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('title', title);
  formData.append('comment', comment);
  
  const response = await Axios.post(
    getRecordsUrl,
    formData,
    {
      headers: { Authorization: "Bearer " + token }
    });
  return response.status === 200;
}

export async function Link(token: string, id: string): Promise<string> {

  const getRecordsUrl = GetApiUrl() + "/documents/link/"+ id;
  
  const response = await Axios.get<string>(
    getRecordsUrl,
    {
      headers: { Authorization: "Bearer " + token}
    });
  return response.data;
}

export function DownloadFile(url: string, title: string, path: string) {
  
  var extension = path.substr(path.lastIndexOf('.'));

  Axios.get(url)
    .then((response) => {
      FileDownload(response.data, title + extension);
  });
}