import React from 'react';
import TaskStore from '../stores/TaskStore';

export default class AddTask extends React.Component {
  addTask() {
    const newTaskName = this.refs.taskTitle.value;
    if (newTaskName) {
      TaskStore.addNewTask({
        name: newTaskName
      });
      TaskStore.emitChange();
      this.refs.taskTitle.value = '';
    }
  }

  render() {
    return (
      <div className="add-task">
        <input type="text" placeholder="Add Tasks" ref="taskTitle" />
        <button className="add-button" onClick={this.addTask.bind(this)}>
          Taks
        </button>
      </div>
    );
  }
}
