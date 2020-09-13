import {EventEmitter} from 'events';
import assign from 'object-assign';

const TaskStore = assign({}, EventEmitter.prototype, {
  items: {
    tasks: [
      { id: 0, name: 'Breakfast', done: false },
      { id: 1, name: 'Interview with BdB', done: false },
      { id: 2, name: 'Be Hired', done: false },
    ]
  },

  nextId: 3,

  getAll: function getAll() {
    return this.items;
  },

  emitChange: function emitChange() {
    this.emit('change');
  },

  addChangeListener: function addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  addNewTask: function addNewTask(task) {
    const tasks = this.items.tasks;
    if (!tasks || typeof this.items.tasks.length !== 'number') {
      this.items.tasks = [];
    }
    task.id = this.nextId++;
    task.done = false;
    this.items.tasks.push(task);
  },

  toggleDone: function toggleDone(id) {
    this.items.tasks = this.items.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
  },

  deleteTask: function deleteTask(id) {
    this.items.tasks = this.items.tasks.filter((task) => task.id !== id);
  }
});

export default TaskStore;
