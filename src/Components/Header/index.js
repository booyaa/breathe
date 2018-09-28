import React from 'react';

import CountdownTimer from '../CountdownTimer';
class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Breathe</h1>
                <CountdownTimer />
            </header>
        );
    }
}

export default Header;