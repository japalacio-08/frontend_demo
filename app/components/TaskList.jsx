import React from 'react';
import TaskStore from '../stores/TaskStore';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TaskStore.getAll();
  }

  componentDidMount() {
    TaskStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TaskStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(TaskStore.getAll());
  }

  render() {
    const TaskItemList = this.state.tasks.map(task => {
      return (
        <TaskItem key={task.id} task={task}/>
      );
    });
    return (
      <ul>{TaskItemList}</ul>
    );
  }
}
