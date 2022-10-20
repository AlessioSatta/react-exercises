import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Container } from './Container';
import { Counter } from './Counter';
import { DisplayLanguage } from './DisplayLanguage';
import { Hello } from './Hello';
import { InterectiveWelcome } from './InteractiveWelcome';
import { LanguageContext } from './LanguageContext';
import { Login } from './Login';
import { TodoList } from './TodoList';
import { UncontrolledLogin } from './UncontrolledLogin';

export class App extends React.Component {
    state = {
        language: 'English'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value='English'>English</option>
                    <option value='Italiano'>Italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <Container title='Container component'>
                        <DisplayLanguage language={this.state.language} />
                        <Hello />
                        <InterectiveWelcome />
                        <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
                        <ClickCounter />
                        <ClickTracker />
                        <Login />
                        <UncontrolledLogin />
                        <TodoList render={(item, handleRemoveItem) => item.map((item, index) => <li key={index + item}>{item}<button onClick={() => handleRemoveItem(index)}>Remove</button></li>)} />
                    </Container>
                </LanguageContext.Provider>
            </div>
        )
    }
}