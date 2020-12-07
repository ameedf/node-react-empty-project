import React, { Component, createRef } from 'react';

class Register extends Component {
    constructor(props) {
        super(props)
        this.userName = React.createRef();
        this.password = React.createRef();
        this.role = React.createRef();
    }

    registeration(e) {
        e.preventDefault();
        const userName = this.userName.current.value;
        const password = this.password.current.value;
        const role = this.role.current.value;
        this.sumbitRegisteration(userName, password, role)
    }

    async sumbitRegisteration(userName, password, role) {
        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                body: JSON.stringify({ userName, password, role }),
                headers: {
                    "Content-type": "application/json",
                },
            }).then(res => res.json()).then(res => console.log(res))
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
            marginTop:"50px",
            display: "flex",
            justifyContent: "center",
        }
        return (
            <div style={divStyle}>
                <form method="POST" action="http://localhost:8080/api/users/register" onSubmit={(event) => this.registeration(event)}>
                    <div style={formStyle}>
                        <input type='text' ref={this.userName} placeholder="Username.." />
                        <input type='password' ref={this.password} placeholder="Password" />
                        <select ref={this.role}>
                            <option value="developer">Developer</option>
                            <option value="leader">Leader</option>
                        </select>
                        <input type='submit' value="Register" />
                    </div>
                </form>

            </div>
        );
    }
}

export default Register;