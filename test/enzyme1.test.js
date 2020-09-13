import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import App from '../app/components/App';

describe('Enzyme Shallow', function () {
  it('App\'s title should be Tasls', function () {
    let app = shallow(<App/>);
    expect(app.find('h1').text()).to.equal('Tasks');
  });
});

describe('Enzyme Render', function () {
  it('Task is not done', function () {
    let app = render(<App/>);
    expect(app.find('.task-done').length).to.equal(0);
  });
});

describe('Enzyme Mount', function () {
  it('Delete Task', function () {
    let app = mount(<App/>);
    let taskLength = app.find('li').length;
    app.find('button.delete').at(0).simulate('click');
    expect(app.find('li').length).to.equal(taskLength - 1);
  });

  it('Set task done', function () {
    let app = mount(<App/>);
    let taskItem = app.find('.task-text').at(0);
    taskItem.simulate('click');
    expect(taskItem.hasClass('task-done')).to.equal(true);
  });

  it('Add a new Task', function () {
    let app = mount(<App/>);
    let taskLength = app.find('li').length;
    let addInput = app.find('input').get(0);
    addInput.value = 'Add Task';
    app.find('.add-button').simulate('click');
    expect(app.find('li').length).to.equal(taskLength + 1);
  });
});
