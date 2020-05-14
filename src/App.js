import React from 'react';
//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory
} from "react-router-dom";

import Home from './pages/Home';
import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import {Nav, Navbar} from 'react-bootstrap';


function App() {
  let history = useHistory();
  return (
    <Router>
      <Navbar bg = "primary" variant = "dark" expand = "sm">
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id = "basic-navbar-nav">
          <Nav className = "mr-auto">
            <Nav.Link as = {NavLink} to = "/">Home</Nav.Link>
            <Nav.Link as = {NavLink} to="/posts">Posts</Nav.Link>
            <Nav.Link as = {NavLink} to="/add-post">Add Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/posts" component = {Posts} />
          <Route path="/add-post" component = {AddPost} />
        </Switch>
    </Router>
  );
}

export default App;
