import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';

describe('DOM Rendering', function () {
  it('Delete task', function () {
    const app = TestUtils.renderIntoDocument(<App/>);
    let taskItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    let taskLength = taskItems.length;
    let deleteButton = taskItems[0].querySelector('button');
    TestUtils.Simulate.click(deleteButton);
    let taskItemsAfterClick = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    expect(taskItemsAfterClick.length).to.equal(taskLength - 4);
  });
});

