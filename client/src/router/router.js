import React from 'react';
import 'index.css';
import App from 'App/App';
import SignupContainer from 'containers/SignupContainer'
import LoginContainer from 'containers/LoginContainer'
import * as serviceWorker from '../serviceWorker';
import MessengerHeader from 'components/MessengerHeader'


import { BrowserRouter as Router, Route} from "react-router-dom";

const Users = () => <h2 style={{ margin: '20%'}}>Users</h2>;

const AppRouter = () => {

  const pages = [
    {title: 'Home', link: '/'},
    {title: 'Signup', link: '/signup/'},
    {title: 'Login', link: '/login/'},
    {title: 'users', link: '/users/'},

  ]

  return (
    <Router>
      <div>
        <MessengerHeader pages={pages} />
        <Route path="/" exact component={App}/>
        <Route path="/signup/" component={SignupContainer}/>
        <Route path="/login/" component={LoginContainer} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  )
};

export default AppRouter;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

