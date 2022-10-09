import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { InterectiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <InterectiveWelcome />
                <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
                <ClickCounter />
                <ClickTracker />
                <Login />
            </div>
        )
    }
}