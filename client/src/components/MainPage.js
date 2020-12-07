import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Register from './register/Register';
import Login from './login/Login';


class MainPage extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/* done */}
                        <NavBar />
                    </div>
                    <Switch>
                        <Route path="/users/register" component={Register} />
                        <Route path="/users/login" component={Login} />
                        {/* <Route path="/logOut" component={LogOut} />
                        <Route path="/tasks" component={Tasks} /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default MainPage;