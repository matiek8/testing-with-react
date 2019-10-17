import React from "react";
import {shallow, shllow} from 'enzyme';
import {findByTestAttr, checkProps} from './../../../Utils'
import ListItem from "./index";
import SharedButton from "../button";

describe('ListItem Component', () => {

  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Test Title',
        desc: 'Test description'
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Test Title',
        desc: 'Test description'
      };
      wrapper = shallow(<ListItem {...props}/>);
    });

    it('Should render a list item', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const component = findByTestAttr(wrapper, 'componentTitle');
      expect(component.length).toBe(1);
    });

    it('Should render a desc', () => {
      const component = findByTestAttr(wrapper, 'componentDesc');
      expect(component.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Test description'
      };
      wrapper = shallow(<ListItem {...props}/>);
    });

    it('Should NOT render a component', () => {
      const component = findByTestAttr(wrapper, 'ListItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
