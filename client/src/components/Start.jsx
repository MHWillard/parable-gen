import React, {Component} from 'react'
import axios from "axios";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
       axios.get('/http://localhost:3000').then(res => {
            this.setState({
                data: 'Nailed it'
            });
        });
    }

    render() {
        return(
            <div>
                <p>Start component</p>
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default Start;