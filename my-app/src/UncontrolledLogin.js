import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _inputFocus = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember,
        })
    }

    componentDidMount() {
        this._inputFocus.current.focus()
    }

    render() {
        return (
            <div>
                <h2>Uncontrolled Login</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input name="username" ref={this._inputFocus}></input>
                    <input name="password" type="password"></input>
                    <input name="remember" type="checkbox"></input>
                    <button type="submit">login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}