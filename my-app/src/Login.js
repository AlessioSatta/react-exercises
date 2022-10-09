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

    render() {
        return (
            <div>
                <input name="username" onChange={this.handleInputChange}></input>
                <input name="password" type="password" onChange={this.handleInputChange}></input>
                <input name="remember" type="checkbox" onChange={this.handleInputChange}></input>
            </div>
        )
    }
}