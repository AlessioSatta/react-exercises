import React from "react";

export class ClickTracker extends React.Component {
    state = {
        clicked: false,
        index: 0
    }
    
    handleClickTracker = (event) => {
        event.preventDefault()

        this.setState({
            clicked: true,
            index: Number(event.target.id)
        })
    }

    render() {
        return(
            <div>
                {this.state.clicked && (this.state.index === 1) && <h1>Hai cliccato il bottone {this.state.index}</h1>}
                {this.state.clicked && (this.state.index === 2) && <h1>Hai cliccato il bottone {this.state.index}</h1>}
                {this.state.clicked && (this.state.index === 3) && <h1>Hai cliccato il bottone {this.state.index}</h1>}
                <button id={1} onClick={this.handleClickTracker}>Bottone uno</button>
                <button id={2} onClick={this.handleClickTracker}>Bottone due</button>
                <button id={3} onClick={this.handleClickTracker}>Bottone tre</button>
            </div>
        )
    }
}