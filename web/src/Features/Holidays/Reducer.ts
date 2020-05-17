import { IHolidaysState, HolidaysActionTypes, HOLIDAYS_GET_SUCCESS } from "./Types";
import { IApplicationState } from "../../RootReducer";

const initialState: IHolidaysState = {
  Holidays: [],
  Page: 1,
  Size: 10
};

function HolidaysReducer(state = initialState, action: HolidaysActionTypes): IHolidaysState {
  switch (action.type) {
    case HOLIDAYS_GET_SUCCESS:
      return { ...state, Holidays: action.payload }    
    default:
      return state;
  }
}

export const SelectHolidaysState = (state: IApplicationState) => state.Holidays;
export const SelectHolidays = (state: IApplicationState) => state.Holidays.Holidays;

export default HolidaysReducer;