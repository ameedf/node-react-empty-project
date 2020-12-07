import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.userNameInput = React.createRef()
        this.userPasswordInput = React.createRef()
    }

    async logIn(e) {
        e.preventDefault()
        const userName = this.userNameInput.current.value;
        const userPassword = this.userPasswordInput.current.value;
        try {
            const ifUserIsRegistered = await fetch("http://localhost:8080/api/users/login", {
                method: "POST",
                body: JSON.stringify({ userName, userPassword }),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json()).then(res => console.log(res));
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const formStyle = {
            display: "flex",
            flexDirection: "column",
        };
        const divStyle = {
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
        }
        return (
            <div style={divStyle}>
                <form method="POST" action="http://localhost:8080/api/users/login" onSubmit={(event) => this.logIn(event)}>
                    <div style={formStyle}>
                        <input type="text" placeholder="Username.." ref={this.userNameInput} />
                        <input type="password" placeholder="Password.." ref={this.userPasswordInput} />
                        <input type="submit" value="LogIn" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;