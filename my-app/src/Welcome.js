import React from "react";
import { Age } from "./Age";

const name = 'Alessio'

export class Welcome extends React.Component {
    render() {
        return(
            <div>
                <p>Welcome, <strong>{name}</strong>!</p>
                {this.props.age > 18 && this.props.age < 65 && <Age age= {this.props.age} />}
            </div>
        )
    }
}
Welcome.defaultProps = {
    name: 'Marco Aurelio'
}