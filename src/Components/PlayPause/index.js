import React from 'react';

import PropTypes from 'prop-types';


// class PlayPause extends React.Component {
//     state = {
//         isPlaying: false
//     };

//     onPlayPause = () => {
//         this.setState({
//             isPlaying: !this.state.isPlaying
//         })
//     };

//     render() {
//         const isPlaying = this.state.isPlaying ? "Pause" : "Play";
//         return (
//             <button onClick={this.onPlayPause}>{isPlaying}</button>
//         );
//     }
// }

function PlayPause({mode: {isPlaying}, onPressed}) {
    return (
        <span >
            <button className="icon-cog" onClick={() => onPressed()}>{isPlaying ? 'pause' : 'play'}</button>
        </span>
    );
}

PlayPause.propTypes = {
    mode: PropTypes.shape({
        isPlaying: PropTypes.bool.isRequired,
    }),
    onPressed: PropTypes.func,
};

export default PlayPause;