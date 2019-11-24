import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the bookHolidays state domain
 */

const selectBookHolidaysDomain = (state: ApplicationRootState) => {
  return state || initialState;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by BookHolidays
 */

const makeSelectBookHolidays = () =>
  createSelector(
    selectBookHolidaysDomain,
    substate => {
      return substate;
    },
  );

export default makeSelectBookHolidays;
export { selectBookHolidaysDomain };
