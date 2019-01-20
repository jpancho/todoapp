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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={ListTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
