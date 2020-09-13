import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import TaskItem from '../app/components/TaskItem';

function shallowRender(Component, props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props}/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('Task item should not have task-done class', function () {
    const taskItemData = { id: 0, name: 'Task one', done: false };
    const taskItem = shallowRender(TaskItem, {task: taskItemData});
    expect(taskItem.props.children[0].props.className.indexOf('task-done')).to.equal(-1);
  });
});

