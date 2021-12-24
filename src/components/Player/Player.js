import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    componentDidUpdate() {
        if(this.props.isLevelDone) {
            this.audioRef.current.audio.current.pause();
        }
    }

    render() {
        return(
            <AudioPlayer
                src={this.props.audio}
                showJumpControls={false}
                showSkipControls={false}
                autoPlayAfterSrcChange={false}
                autoPlay={false}
                ref={this.audioRef}
                volume={0.05}
            />
        );
    }
}

export default Player;
