import React from 'react';
import {findDOMNode} from 'react-dom';
import jsdom from 'jsdom';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import App from '../app/components/App';

describe('DOM Rendering', function (done) {
  it('Set task done when click over', function () {
    const app = TestUtils.renderIntoDocument(<App/>);
    const appDOM = findDOMNode(app);
    const taskItem = appDOM.querySelector('li:first-child span');
    let isDone = taskItem.classList.contains('task-done');
    TestUtils.Simulate.click(taskItem);
    expect(taskItem.classList.contains('task-done')).to.be.equal(!isDone);
    // make the item returns to previous state
    TestUtils.Simulate.click(taskItem);
  });
});

