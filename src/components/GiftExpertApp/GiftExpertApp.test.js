import React from 'react';
import { shallow } from 'enzyme';
import GiftExpertApp from './giftExpertApp';

describe('GiftExpertApp', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<GiftExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
