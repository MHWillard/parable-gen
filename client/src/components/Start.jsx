import React from 'react'
import axios from "axios";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
       axios.get('http://localhost:5000').then(res => {
           console.log(res.data.message);
           this.setState({data: res.data.message});
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