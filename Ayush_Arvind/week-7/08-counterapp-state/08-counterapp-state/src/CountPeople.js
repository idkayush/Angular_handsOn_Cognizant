import React, { Component } from "react";

class CountPeople extends Component {
    constructor(props) {
        super(props);
        this.state = { entryCount: 0, exitCount: 0 };
    }

    updateEntry = () => {
        this.setState((state) => ({
            entryCount: state.entryCount + 1
        }));
    };

    updateExit = () => {
        this.setState((state) => ({
            exitCount: state.exitCount + 1
        }));
    };

    render() {
        return (
            <div>
                <h1>Mall Counter</h1>
                <button onClick={this.updateEntry}>Login</button>
                <span> People Entered: {this.state.entryCount}</span>
                <br /><br />
                <button onClick={this.updateExit}>Exit</button>
                <span> People Exited: {this.state.exitCount}</span>
            </div>
        );
    }
}

export default CountPeople;
