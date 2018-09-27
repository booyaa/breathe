import React from 'react';

class NumberWang extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) => <li key={number.toString()}>{number*number}</li>)
        // const listItems = numbers.map((number) => <li>{number*number}</li>) // uncomment to see warning that children of an array should have a "key" prop in the browser

        return <ul>{listItems}</ul>;
    }
};

export default NumberWang;