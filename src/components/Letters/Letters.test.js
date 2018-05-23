import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Letters from './Letters';

configure({adapter: new Adapter()});

describe('<Letters />', () => {
  it('should render letter if occured in the fetched word', () => {
    const wrapper = shallow(<Letters />);
    expect(wrapper.find(Letters)).toHaveLength(2);
  });

  it('should render letter if occured in the fetched word', () => {
    const wrapper = shallow(<Letters />);
    expect(wrapper.find()).toHaveLength(2);
  });
});
