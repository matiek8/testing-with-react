import React from "react";
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from './../../../Utils'
import SharedButton from "./index";


describe('SharedButtonComponent', () => {

  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      const propsError  = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      wrapper = shallow(<SharedButton {...props}/>);
    });

    it('Should render a button', () => {
      const component = findByTestAttr(wrapper, 'buttonComponent');
      expect(component.length).toBe(1);
    })
  });


});
