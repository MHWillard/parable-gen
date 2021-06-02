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

//e = event, use it as an argument and prevent the browser's default response
reArm(e) {
  e.preventDefault();
  this.setState({
      data: "test", 
      test: "lame"
   });
}

componentDidMount() {
  axios.get('http://localhost:5000').then(res => {
      let text = JSON.stringify(res.data.person)
      console.log('GET data: ', text); 
      //let dataObject = res.data;
      //console.log("dataObject" + dataObject);
      //let [firstname, lastname, age, problem, business, goal, moneygoal] = dataObject
      //console.log(goal)
      //console.log("name" + firstname)
      //console.log("object name" + dataObject.firstname)
      //console.log("object data firstname" + res.data.person.firstname)
      //spread person object
      //assign to each property in state
      this.setState({data: res.data.person});
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
