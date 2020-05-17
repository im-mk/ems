import { IHolidaysGetRequestAction, IHolidaysGetSuccessAction, IHolidaysGetFailureAction, 
  HOLIDAYS_GET_REQUEST, HOLIDAYS_GET_SUCCESS, HOLIDAYS_GET_FAILURE } from "./Types";  
import IHoliday from "../../services/Holiday/types/IHoliday";

// Get Holidays

export function HolidaysGetRequest(): IHolidaysGetRequestAction {
  return {
    type: HOLIDAYS_GET_REQUEST
  };
}

export function HolidaysGetSuccess(payload: IHoliday[]): IHolidaysGetSuccessAction {
  return {
    type: HOLIDAYS_GET_SUCCESS,
    payload: payload
  };
}

export function HolidaysGetFailure(payload: string): IHolidaysGetFailureAction {
  return {
    type: HOLIDAYS_GET_FAILURE,
    payload: payload
  };
}