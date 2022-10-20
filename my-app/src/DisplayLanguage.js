import React from "react";

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <div>
                {this.props.language === 'English' ? <h1>Current language is: {this.props.language}</h1> : <h1>La lingua corrente è: {this.props.language}</h1>}
            </div>
        )
    }
}