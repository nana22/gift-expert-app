import React from 'react';
import { shallow } from 'enzyme';
import GiftItem from './GiftItem';

describe('GiftItem', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<GiftItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
