import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Container } from './Container';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { InterectiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { TodoList } from './TodoList';
import { UncontrolledLogin } from './UncontrolledLogin';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Container title='Container component'>
                    <Hello />
                    <InterectiveWelcome />
                    <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
                    <ClickCounter />
                    <ClickTracker />
                    <Login />
                    <UncontrolledLogin />
                    <TodoList render={(item, handleRemoveItem)=> item.map((item, index) => <li key={index + item}>{item}<button onClick={()=>handleRemoveItem(index)}>Remove</button></li>)} />
                </Container>
            </div>
        )
    }
}