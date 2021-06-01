import React from 'react'


class Start extends React.Component {


    //this needs to take state and loop it back up into App component


    render() {
        return(
            <div>
                <p>Start component</p>
                <p>Data: {this.props.data}</p>
                <p>Test: {this.props.test}</p>
                <form onSubmit={this.props.reArm}>
                    <button type="submit">Reload</button>
                </form>
            </div>
        );
    }
}

export default Start;