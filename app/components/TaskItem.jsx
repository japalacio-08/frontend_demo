import React from 'react';
import TaskStore from '../stores/TaskStore';

export default class Task extends React.Component {
  toggleDone(e) {
    e.preventDefault();
    TaskStore.toggleDone(this.props.task.id);
    TaskStore.emitChange();
  }

  deleteTask(e) {
    e.preventDefault();
    TaskStore.deleteTask(this.props.task.id);
    TaskStore.emitChange();
  }

  render() {
    const task = this.props.task;
    const taskDone = task.done ? 'task-done' : '';
    return (
      <li>
        <span className={`task-text ${taskDone}`} onClick={this.toggleDone.bind(this)}>{task.name}</span>
        <button className="delete" onClick={this.deleteTask.bind(this)}> x </button>
      </li>
    );
  }
}
