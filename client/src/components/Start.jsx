import React from 'react'
import axios from "axios";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            test: 'fart'
        };

        this.reArm = this.reArm.bind(this);
    }

    componentDidMount() {
       axios.get('http://localhost:5000').then(res => {
           //console.log(res.data.person);
           let dataObject = res.data.person;
           console.log("dataObject" + dataObject);
           let [firstname, lastname, age, problem, business, goal, moneygoal] = dataObject
           console.log("name" + firstname)
           console.log("object name" + dataObject.firstname)
           console.log("object data firstname" + res.data.person.firstname)
           //spread person object
           //assign to each property in state
        });
    }

    //this needs to take state and loop it back up into App component
    reArm() {
        this.setState({
            data: "test"
         });
    }

    render() {
        return(
            <div>
                <p>Start component</p>
                <p>Data: {this.state.data}</p>
                <p>Test: {this.state.test}</p>
                <form onSubmit={this.reArm}>
                    <button type="submit">Reload</button>
                </form>
            </div>
        );
    }
}

export default Start;