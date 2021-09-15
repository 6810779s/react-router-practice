import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

const Topic = () => {
  const contents = [
    { id: 1, title: 'HTML', desc: 'HTML is..' },
    { id: 2, title: 'CSS', desc: 'CSS is..' },
    { id: 3, title: 'JavaScript', desc: 'JavaScript is..' },
  ];
  let list_NavLink = [];
  let list_Route = [];
  contents.map((content) => {
    list_NavLink.push(
      <li key={content.id}>
        <NavLink exact to={'/Topic/' + content.id}>
          {content.title}
        </NavLink>
      </li>
    );
    list_Route.push(
      <Route exact path={'/Topic/' + content.id}>
        {content.desc}
      </Route>
    );
  });

  return (
    <div>
      Topic
      <ul>{list_NavLink}</ul>
      <Switch>{list_Route}</Switch>
    </div>
  );
};

export default Topic;
