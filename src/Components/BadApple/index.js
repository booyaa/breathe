import React from 'react';

class BadApple extends React.Component {
    render() {
        const divStyle = {
            color: 'red',
            fontSize: '0.9em',
        };

        return <div style={divStyle}>Witness the horror of inline styling!</div>
    }
}

export default BadApple;