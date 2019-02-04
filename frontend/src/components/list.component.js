import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_priority}</td>
    <td>{props.todo.todo_completed}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
)


export default class ListTodo
  extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/todos/')
      .then(res => {
        this.setState({todos: res.data});
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key ={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <table className="table table-striped" style={{ marginTop: 15}}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.todoList()}
          </tbody>
        </table>
      </div>
    )
  }
}