import React from 'react';

class Printer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let childCount = React.Children.count(this.props.children);
        let message;

        if (childCount < 1) {
            message = (
                <span>js type: {typeof (this.props.value)}</span>
            );
        } else {
            message = (<span>not a js type: {this.props.children}</span>);
        }

        return (<h1>{message}</h1>);
    }
}

export default Printer;