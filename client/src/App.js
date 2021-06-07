import React from 'react'
import './App.css';
import Summary from './components/Summary';
import Intro from './components/Intro';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

//state must be set here and passed down into Start component as a prop

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        lastname: '',
        age: '',
        problem: '',
        business: '',
        goal: '',
        moneygoal: '',
        isGenerated: false
    };

    this.reArm = this.reArm.bind(this);
}

//e = event, use it as an argument and prevent the browser's default response
reArm(e) {
  e.preventDefault();
  this.setState({
      firstname: "Janice",
      isGenerated: true
   });
}

//generateParable: roll numbers, pull from DB, and get randomized entries

componentDidMount() {
  axios.get('http://localhost:5000').then(res => {
      //spread person object
      let {firstname, lastname, age, problem, business, goal, moneygoal} = res.data

      //assign to each property in state
      this.setState({firstname: firstname, lastname: lastname, age: age, problem: problem, business: business, goal: goal, moneygoal: moneygoal});
   });
}

  render() {
    let isGenerated = this.state.isGenerated;

    const renderParable = () => {
      if (isGenerated) {
        return <Summary
        firstname={this.state.firstname} 
        lastname={this.state.lastname} 
        age={this.state.age} 
        problem={this.state.problem} 
        business={this.state.business} 
        goal={this.state.goal} 
        moneygoal={this.state.moneygoal}  
        reArm={this.reArm} 
        />
      } else {
        return <Intro reArm={this.reArm} /> 
      }
    };

    return (
      <div className="App">
        <header>
        </header>
        <body>
          {renderParable()}
        </body>
      </div>
    );
  }
}

// if (isLoggedIn) {    return <UserGreeting />;  }  return <GuestGreeting />;}

export default App;
