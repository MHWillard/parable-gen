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

reArm(e) {
  e.preventDefault();
  this.setState({
      data: "test", 
      test: "lame"
   });
}

componentDidMount() {
  axios.get('http://localhost:5000').then(res => {
      let dataObject = res.data.person;
      //console.log("dataObject" + dataObject);
      let [firstname, lastname, age, problem, business, goal, moneygoal] = dataObject
      console.log(dataObject.goal)
      //console.log("name" + firstname)
      //console.log("object name" + dataObject.firstname)
      //console.log("object data firstname" + res.data.person.firstname)
      //spread person object
      //assign to each property in state
      this.setState({data: firstname});
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
