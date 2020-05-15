import { put, takeEvery, fork, all, select } from 'redux-saga/effects';
import { Get, Create, Link, DownloadFile } from './../../services/Documents/DocumentsService';
import { DocumentsSuccess, DocumentsFailure, DocumentsCreateSuccess, DocumentsCreateFailure, DocumentsDownloadSuccess, DocumentsDownloadFailure} from './Action';
import { DOCUMENTS_REQUEST, IDocumentRequestAction, DOCUMENTS_CREATE_REQUEST, IDocumentCreateRequestAction, IDocumentDownloadRequestAction, DOCUMENTS_DOWNLOAD_REQUEST } from './Types';
import IDocument from '../../services/Documents/types/IDocument';
import { SelectToken } from '../Login/Reducer';
import { SelectDocumentsState } from './Reducer';

function* HandleDocumentsRequest(action: IDocumentRequestAction) {
    try {                     
        const token = yield select(SelectToken);
        const documents = yield select(SelectDocumentsState);
        const result: IDocument[] = yield Get(token, documents.Page, documents.Size);
        yield put(DocumentsSuccess(result));
    } catch (err) {        
        yield put(DocumentsFailure("error"))
    }
}

function* HandleDocumentsCreateRequest(action: IDocumentCreateRequestAction) {
    try {                     
        const token = yield select(SelectToken);                    
        const result: boolean = yield Create(token, action.payload);
        yield put(DocumentsCreateSuccess(result));
    } catch (err) {        
        yield put(DocumentsCreateFailure("error"))
    }
}

function* HandleDocumentsDownloadRequest(action: IDocumentDownloadRequestAction) {
    try {                     
        const token = yield select(SelectToken);
        const result = yield Link(token, action.payload.Id);
        yield DownloadFile(result, action.payload.Title, action.payload.Path);

        yield put(DocumentsDownloadSuccess());
    } catch (err) {        
        yield put(DocumentsDownloadFailure("error"))
    }
}

function* WatchDocumentsRequest() {
   yield takeEvery(DOCUMENTS_REQUEST, HandleDocumentsRequest)
}

function* WatchDocumentsCreateRequest() {
    yield takeEvery(DOCUMENTS_CREATE_REQUEST, HandleDocumentsCreateRequest)
 }

 function* WatchDocumentsDownloadRequest() {
    yield takeEvery(DOCUMENTS_DOWNLOAD_REQUEST, HandleDocumentsDownloadRequest)
 }

function* DocumentsSaga() {
    yield all([
        fork(WatchDocumentsRequest),
        fork(WatchDocumentsCreateRequest),
        fork(WatchDocumentsDownloadRequest)
    ])
}

export default DocumentsSaga;