import { DOCUMENTS_REQUEST, DOCUMENTS_SUCCESS, DOCUMENTS_FAILURE, 
  IDocumentRequestAction, IDocumentSuccessAction, IDocumentFailureAction, ICreateDocument, IDocumentCreateRequestAction, IDocumentCreateSuccessAction, DOCUMENTS_CREATE_REQUEST, DOCUMENTS_CREATE_SUCCESS, DOCUMENTS_CREATE_FAILURE, IDocumentCreateFailureAction, DOCUMENTS_DOWNLOAD_REQUEST, IDocumentDownloadRequestAction, DOCUMENTS_DOWNLOAD_SUCCESS, DOCUMENTS_DOWNLOAD_FAILURE, IDownloadDocument, IDocumentDownloadSuccessAction, IDocumentDownloadFailureAction } from "./Types";
import IDocument from "../../services/Documents/types/IDocument";

// Get documents

export function DocumentsRequest(): IDocumentRequestAction {
  return {
    type: DOCUMENTS_REQUEST
  };
}

export function DocumentsSuccess(payload: IDocument[]): IDocumentSuccessAction {
    return {
      type: DOCUMENTS_SUCCESS,
      payload: payload
    };
}

export function DocumentsFailure(payload: string): IDocumentFailureAction {
  return {
    type: DOCUMENTS_FAILURE,
    payload: payload
  };
}

// Create document

export function DocumentsCreateRequest(payload: ICreateDocument): IDocumentCreateRequestAction {
  return {
    type: DOCUMENTS_CREATE_REQUEST,
    payload: payload
  };
}

export function DocumentsCreateSuccess(payload: boolean): IDocumentCreateSuccessAction {
    return {
      type: DOCUMENTS_CREATE_SUCCESS,
      payload: payload
    };
}

export function DocumentsCreateFailure(payload: string): IDocumentCreateFailureAction {
  return {
    type: DOCUMENTS_CREATE_FAILURE,
    payload: payload
  };
}

// Download document

export function DocumentsDownloadRequest(payload: IDownloadDocument): IDocumentDownloadRequestAction {
  return {
    type: DOCUMENTS_DOWNLOAD_REQUEST,
    payload: payload
  };
}

export function DocumentsDownloadSuccess(): IDocumentDownloadSuccessAction {
    return {
      type: DOCUMENTS_DOWNLOAD_SUCCESS
    };
}

export function DocumentsDownloadFailure(payload: string): IDocumentDownloadFailureAction {
  return {
    type: DOCUMENTS_DOWNLOAD_FAILURE,
    payload: payload
  };
}