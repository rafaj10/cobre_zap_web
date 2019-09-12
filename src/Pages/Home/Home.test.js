import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { act } from 'react-dom/test-utils';
import Home from './Home';


describe('HomePage', () => {
  const onCountChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Home onCountChange={onCountChange} />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  // it('shows my default text', () => {
  //   expect(wrapper.find('p').text()).toEqual('Count: 0');
  // });
});