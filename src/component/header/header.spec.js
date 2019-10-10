import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Header from './index';

const setUp = (props={})=> {
  const component = shallow(<Header {...props}/>)
  return component;
};

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
      wrapper = setUp();
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'headerComponent');
    expect(component.length).toBe(1)
  });

  it('Should render a logo', () => {
    const component = findByTestAttr(wrapper, 'headerComponent');
    expect(component.length).toBe(1)
  })
});
