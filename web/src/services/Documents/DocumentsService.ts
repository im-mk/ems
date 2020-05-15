import Axios from "axios";
import { GetApiUrl } from "../../env";
import IDocument from "./types/IDocument";
import FileDownload from 'js-file-download';
import { ICreateDocument } from "../../Features/Documents/Types";

export async function Get(token: string, page: number, size: number): Promise<IDocument[]> {

  const url = GetApiUrl() + "/documents?page=" + page + "&size=" + size;

  const response = await Axios.get<IDocument[]>(
    url,
    {
      headers: { Authorization: "Bearer " + token}
    });
  return response.data;
}

export async function Create(token: string, document: ICreateDocument): Promise<boolean> {

  const url = GetApiUrl() + "/documents";

  const formData = new FormData();
  formData.append('file', document.SelectedFile);
  formData.append('title', document.Title);
  formData.append('comment', document.Comment);
  
  const response = await Axios.post(
    url,
    formData,
    {
      headers: { Authorization: "Bearer " + token }
    });
  return response.status === 200;
}

export async function Link(token: string, id: string): Promise<string> {

  const url = GetApiUrl() + "/documents/link/"+ id;
  
  const response = await Axios.get<string>(
    url,
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