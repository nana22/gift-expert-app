import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from './AddCategory';

describe('AddCategory', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AddCategory />);
    expect(wrapper).toMatchSnapshot();
  });
});
