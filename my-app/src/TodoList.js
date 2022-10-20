import React from "react";

export class TodoList extends React.Component {
    state = {
        inputValue: ['todo1', 'todo2', 'todo3'], // valore dell'input utile per aggiorname lo stato e l'array
        item: [] // array vuoto per l'inserimento degli elementi
    }

    handleAddItem = (event) => {
        event.preventDefault()
        this.setState({
            item: [this.state.inputValue, ...this.state.item], // aggiunge all'array il nuovo elemento
            inputValue: '' // cancella il campo di input per prepararlo ad un nuovo inserimento
        })
    }

    // funzione necessaria per campilare il campo di input e aggiornare lo stato
    handelInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleReset = (event) => {
        event.preventDefault()

        this.setState({
            item: [],
            inputValue: ''
        })
    }

    handleRemoveItem = (index) => {
        this.setState({
            item: this.state.item.filter((e, i) => {
                return e = i !== index
            })
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
                    {this.props.render(this.state.item, this.handleRemoveItem)}
                </ul>
            </div>
        )
    }
}