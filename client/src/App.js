import React from 'react'
import './App.css';
import Start from './components/Start';
import axios from "axios";

//state must be set here and passed down into Start component as a prop

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: '',
        test: 'fart'
    };

    this.reArm = this.reArm.bind(this);
}

reArm() {
  this.setState({
      data: "test"
   });
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

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <body>
          <Start data={this.state.data} test={this.state.test} reArm={this.reArm} />
        </body>
      </div>
    );
  }
}

export default App;
