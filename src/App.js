import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ListTodo from "./components/list.component";
import EditTodo from "./components/edit.component";
import CreateTodo from "./components/create.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Todo App</h2>
          <Route path="/" exact component={ListTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
