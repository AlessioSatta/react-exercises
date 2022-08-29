import React from "react";

const name = 'Alessio'

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <p>Welcome, <strong>{name}</strong>!</p>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}
Welcome.defaultProps = {
    name: 'Marco Aurelio'
}