import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    onLogin = (event) => {
        event.preventDefault()

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                <input name="password" value={this.state.password} type="password" onChange={this.handleInputChange}></input>
                <input name="remember" checked={this.state.remember} type="checkbox" onChange={this.handleInputChange}></input>
                <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>login</button>
            </div>
        )
    }
}