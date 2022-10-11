import React from "react";

export class TodoList extends React.Component {
    state = {
        inputValue: '', // valore dell'input utile per aggiorname lo stato e l'array
        items: [] // array vuoto per l'inserimento degli elementi
    }

    handleAddItem = (event) => {
        event.preventDefault()
        this.setState({
                items: [this.state.inputValue, ...this.state.items], // aggiunge all'array il nuovo elemento
                inputValue: '' // cancella il campo di input per prepararlo ad un nuovo inserimento
        })
    }

    // funzione necessaria per campilare il campo di input e aggiornare lo stato
    handelInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleReset = () => {
        this.setState({
            items: [],
            inputValue: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <input name="items" value={this.state.inputValue} onChange={this.handelInputChange}></input>
                <button onClick={this.state.inputValue !== '' ? this.handleAddItem : undefined}>Add item</button>
                <button onClick={this.handleReset}>Reset</button>
                <ul>
                    {this.state.items.map((items, index) => {
                        return <li key={index + items}>{items}</li>
                    })}
                </ul>
            </div>
        )
    }
}