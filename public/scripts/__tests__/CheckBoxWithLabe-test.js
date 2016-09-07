import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckBoxWithLabel from '../CheckBoxWithLabel';

import {mount} from 'enzyme';

// Enzime shallow rendering
describe('<CheckBoxWithLabel />', ()=> {
  it('change the text after click', ()=> {
    const box = mount(<CheckBoxWithLabel labelOn ="On" labelOff="Off" />);
    expect(box.find('.result').html()).toEqual('<p class="result">Off</p>');
    console.log("Mounted box");
    box.find('input').simulate('change');
    expect(box.find('.result').html()).toEqual('<p class="result">On</p>');
  });
});


//Using only the test utils
//describe('CheckBoxWithLabel ', ()=> {
//
//  it('change the text after click', ()=>{
//    const checkbox = TestUtils.renderIntoDocument(
//      <CheckBoxWithLabel labelOn ="On" labelOff="Off" />
//    );
//
//    const checkboxNode = ReactDOM.findDOMNode(checkbox);
//    var textContent = checkboxNode.textContent;
//    console.log("------------------- "+textContent);
//    expect(textContent).toEqual('Off');
//
//    // Simulate a click and verify that it is now On
//    TestUtils.Simulate.change(
//      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
//    );
//    expect(checkboxNode.textContent).toEqual('On');
//  });
//});
