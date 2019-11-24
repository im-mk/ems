import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface BookHolidaysState {
  readonly default: any;
}

/* --- ACTIONS --- */
type BookHolidaysActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = BookHolidaysState;
type ContainerActions = BookHolidaysActions;

export { RootState, ContainerState, ContainerActions };
