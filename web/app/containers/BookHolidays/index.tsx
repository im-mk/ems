/*
 *
 * BookHolidays
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBookHolidays from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  bookHolidays: makeSelectBookHolidays(),
});

interface Props {}

function BookHolidays(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'bookHolidays', reducer: reducer });
  useInjectSaga({ key: 'bookHolidays', saga: saga });

  const { bookHolidays } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default BookHolidays;
