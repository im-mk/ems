import LoginReducer from "./Features/Login/Reducer";
import { combineReducers } from "redux";
import DocumentsReducer from './Features/Documents/Reducer';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { ILoginState } from './Features/Login/Types';
import { IDocumentsState } from './Features/Documents/Types';
import { IHolidaysState } from './Features/Holidays/Types';
import HolidaysReducer from './Features/Holidays/Reducer';

export interface IApplicationState {    
  Login: ILoginState;    
  Documents: IDocumentsState;
  Router: RouterState;
  Holidays: IHolidaysState;
}

const RootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    Login: LoginReducer,
    Documents: DocumentsReducer,
    Holidays: HolidaysReducer
  });

export default RootReducer;