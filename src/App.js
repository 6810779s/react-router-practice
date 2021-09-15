import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Topic from './components/Topic';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Topic">
            Topic
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/Topic" component={Topic} />
        <Route exact path="/Topic/:id" component={Topic} />
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
};

export default App;
