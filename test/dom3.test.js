import React from 'react';
import {findDOMNode} from 'react-dom';
import jsdom from 'jsdom';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';

describe('DOM Rendering', function (done) {
  it('Add new task', function () {
    const app = TestUtils.renderIntoDocument(<App/>);
    const appDOM = findDOMNode(app);
    let taskItemsLength = appDOM.querySelectorAll('.task-text').length;
    let addInput = appDOM.querySelector('input');
    addInput.value = 'Add Task';
    let addButton = appDOM.querySelector('.add-task button');
    TestUtils.Simulate.click(addButton);
    expect(appDOM.querySelectorAll('.task-text').length).to.be.equal(taskItemsLength + 1);
  });
});

