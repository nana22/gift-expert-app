import React from 'react';
import { shallow } from 'enzyme';
import GiftGrid from './GiftGrid';

describe('GiftGrid', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<GiftGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
