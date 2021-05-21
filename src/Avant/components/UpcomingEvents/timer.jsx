import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        const currentTime = moment(new Date(), 'DD MM YYYY', true);
        const targetTime = moment('07 02 2021', 'DD MM YYYY', true);
        this.state = { 
            timeRemaining: targetTime.from(currentTime) 
        };
        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateTime() {
        const currentTime = moment(new Date(), 'DD MM YYYY', true);
        const targetTime = moment('07 02 2021', 'DD MM YYYY', true);
        this.setState({
            timeRemaining: targetTime.from(currentTime) 
        });
    }
    
    render() {
        const time = this.state.timeRemaining;
        const display = time.charAt(0).toUpperCase() + time.slice(1);

        return (
            <React.Fragment>
                <h3 className={this.props.className} style={this.props.style}>{display}</h3>
            </React.Fragment>
        );
    }
}

export default Timer;