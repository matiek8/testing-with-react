import React from 'react';
import {shallow} from 'enzyme';
import Headline from "./index";
import {findByTestAttr, checkProps} from "../../../Utils";
import checkPropTypes from 'check-prop-types'

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props}/>);
  return component;
};

describe('Headline Component', () => {

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 23,
          onlineStatus: true
        }]
      };
      const propsErr = checkProps(Headline.propTypes, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render H1 without errors', () => {
      const component = findByTestAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('Should render desc without errors', () => {
      const component = findByTestAttr(wrapper, 'desc');
      expect(component.length).toBe(1);
    })
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper=setUp();
    });

    it('Should not render', () => {
      const component = findByTestAttr(wrapper,'headlineComponent');
            expect(component.length).toBe(0);
    })
  });
});
