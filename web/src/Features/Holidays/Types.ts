import IHoliday from '../../services/Holiday/types/IHoliday';

export const HOLIDAYS_GET_REQUEST = "HOLIDAYS_GET_REQUEST";
export const HOLIDAYS_GET_SUCCESS = "HOLIDAYS_GET_SUCCESS";
export const HOLIDAYS_GET_FAILURE = "HOLIDAYS_GET_FAILURE";

export interface IHolidaysState {
    Holidays: IHoliday[];
    Page: number;
    Size: number;
}

// Get Holidays
export interface IHolidaysGetRequestAction {
    type: typeof HOLIDAYS_GET_REQUEST;
}

export interface IHolidaysGetSuccessAction {
    type: typeof HOLIDAYS_GET_SUCCESS;
    payload: IHoliday[];
}

export interface IHolidaysGetFailureAction {
    type: typeof HOLIDAYS_GET_FAILURE;
    payload: string;
}

// All actions
export type HolidaysActionTypes = 
    IHolidaysGetRequestAction | IHolidaysGetSuccessAction | IHolidaysGetFailureAction;