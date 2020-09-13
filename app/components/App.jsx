import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <TaskList/>
        <AddTask/>
      </div>
    );
  }
}
