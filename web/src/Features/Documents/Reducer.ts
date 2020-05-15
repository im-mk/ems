import { IDocumentsState, DocumentActionTypes, DOCUMENTS_SUCCESS, DOCUMENTS_CREATE_SUCCESS } from "./Types";
import { IApplicationState } from "../../RootReducer";

const initialState: IDocumentsState = {
  Documents: [],
  Page: 1,
  Size: 10,
  CreateDocumentResult: false
};

function DocumentsReducer(state = initialState, action: DocumentActionTypes): IDocumentsState {
  switch (action.type) {
    case DOCUMENTS_SUCCESS:
      return { ...state, Documents: action.payload }
    case DOCUMENTS_CREATE_SUCCESS:
      return { ...state, CreateDocumentResult: action.payload }
    default:
      return state;
  }
}

export const SelectDocumentsState = (state: IApplicationState) => state.Documents;
export const SelectDocuments = (state: IApplicationState) => state.Documents.Documents;
export const SelectCreateDocumentResult = (state: IApplicationState) => state.Documents.CreateDocumentResult;

export default DocumentsReducer;