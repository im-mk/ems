import IDocument from '../../services/Documents/types/IDocument';

export const DOCUMENTS_REQUEST = "DOCUMENTS_REQUEST";
export const DOCUMENTS_SUCCESS = "DOCUMENTS_SUCCESS";
export const DOCUMENTS_FAILURE = "DOCUMENTS_FAILURE";

export const DOCUMENTS_CREATE_REQUEST = "DOCUMENTS_CREATE_REQUEST";
export const DOCUMENTS_CREATE_SUCCESS = "DOCUMENTS_CREATE_SUCCESS";
export const DOCUMENTS_CREATE_FAILURE = "DOCUMENTS_CREATE_FAILURE";

export const DOCUMENTS_DOWNLOAD_REQUEST = "DOCUMENTS_DOWNLOAD_REQUEST";
export const DOCUMENTS_DOWNLOAD_SUCCESS = "DOCUMENTS_DOWNLOAD_SUCCESS";
export const DOCUMENTS_DOWNLOAD_FAILURE = "DOCUMENTS_DOWNLOAD_FAILURE";

export interface ICreateDocument {
    SelectedFile: any;
    Title: string;
    Comment: string;
}

export interface IDocumentsState {
    Documents: IDocument[];
    Page: number;
    Size: number;
    CreateDocumentResult: boolean;
}

// Get Documents
export interface IDocumentRequestAction {
    type: typeof DOCUMENTS_REQUEST;
}

export interface IDocumentSuccessAction {
    type: typeof DOCUMENTS_SUCCESS;
    payload: IDocument[];
}

export interface IDocumentFailureAction {
    type: typeof DOCUMENTS_FAILURE;
    payload: string;
}

// Create Document
export interface IDocumentCreateRequestAction {
    type: typeof DOCUMENTS_CREATE_REQUEST;
    payload: ICreateDocument;
}

export interface IDocumentCreateSuccessAction {
    type: typeof DOCUMENTS_CREATE_SUCCESS;
    payload: boolean;
}

export interface IDocumentCreateFailureAction {
    type: typeof DOCUMENTS_CREATE_FAILURE;
    payload: string;
}

export interface IDownloadDocument {
    Id: string;
    Title: string;
    Path: string;
}

// Download Document
export interface IDocumentDownloadRequestAction {
    type: typeof DOCUMENTS_DOWNLOAD_REQUEST;
    payload: IDownloadDocument;
}

export interface IDocumentDownloadSuccessAction {
    type: typeof DOCUMENTS_DOWNLOAD_SUCCESS;
}

export interface IDocumentDownloadFailureAction {
    type: typeof DOCUMENTS_DOWNLOAD_FAILURE;
    payload: string;
}


// All actions
export type DocumentActionTypes = 
    IDocumentRequestAction | IDocumentSuccessAction | IDocumentFailureAction 
    | IDocumentCreateRequestAction | IDocumentCreateSuccessAction | IDocumentCreateFailureAction
    | IDocumentDownloadRequestAction | IDocumentDownloadSuccessAction | IDocumentDownloadFailureAction;