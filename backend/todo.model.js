const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Todo = new schema({
  todo_description: {
    type: String
  },
  todo_priority: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Todo', Todo);