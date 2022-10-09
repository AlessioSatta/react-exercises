import React from "react";
import { Welcome } from "./Welcome";

export class InterectiveWelcome extends React.Component {
    state = {
        username: ''
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                {this.state.username && <Welcome name={this.state.username} />}
            </div>
        )
    }
}