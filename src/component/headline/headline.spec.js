import React from 'react';
import {shallow} from 'enzyme';
import Headline from "./index";
import {findByTestAttr} from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props}/>);
  return component;
};

describe('Headline Component', () => {

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
    })

    it('Should not render', () => {
      const component = findByTestAttr(wrapper,'headlineComponent');
            expect(component.length).toBe(0);
    })
  });
});
