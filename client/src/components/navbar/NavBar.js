import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const styleDiv = {
            margin: "10px 10px 10px 10px",

        }
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item active" style={styleDiv}>
                        <Link to="/users/login">LogIn</Link>
                    </li>
                    <li className="nav-item active" style={styleDiv}>
                        <Link to='/users/register'>Register</Link>
                    </li>
                    <li className="nav-item active" style={styleDiv}>
                        <Link to='/tasks'>Tasks</Link>
                    </li>
                    <li className="nav-item active" style={styleDiv}>
                        <Link to='logout'>LogOut</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default NavBar;