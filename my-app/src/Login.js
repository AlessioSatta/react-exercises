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

    onLogin = () => {
        
    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.value} onChange={this.handleInputChange}></input>
                <input name="password" value={this.state.value} type="password" onChange={this.handleInputChange}></input>
                <input name="remember" type="checkbox" onChange={this.handleInputChange}></input>
                <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>login</button>
            </div>
        )
    }
}