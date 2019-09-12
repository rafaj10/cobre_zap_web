import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { render } from '@testing-library/react'

import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Login from './Login';

describe('LoginPage', () => {
  const mockStore = configureStore()
  let store,wrapper

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
  // it('Shows "Hello world!"', () => {
  //   const initialState = {output:10}
  //   store = mockStore(initialState)
  //   const { getByText } = render(<Provider store={store}><Login /></Provider>)
  //
  //   expect(getByText('Login')).not.toBeNull()
  // })
});