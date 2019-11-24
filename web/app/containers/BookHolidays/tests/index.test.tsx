/**
 *
 * Tests for BookHolidays
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import history from '../../../utils/history';

import BookHolidays from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';
import configureStore from '../../../configureStore';
describe('<BookHolidays />', () => {
  let store;

  beforeEach(() => {
    store = configureStore({}, history);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <IntlProvider locale="en">
          <BookHolidays />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  // it('Expect to have additional unit tests specified', () => {
  //   expect(true).toEqual(false);
  // });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <IntlProvider locale="en">
          <BookHolidays />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
