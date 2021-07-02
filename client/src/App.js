import React from 'react'
import './App.css';
import Summary from './components/Summary';
import Intro from './components/Intro';
import axios from "axios";

//supply CDN link
import 'bootstrap/dist/css/bootstrap.min.css';

//state must be set here and passed down into Start component as a prop

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      pronoun: '',
      business: '',
      desc1: '',
      problem1: '',
      problem2: '',
      problem3: '',
      timelimit: '',
      mentor1: '',
      mentor2: '',
      advice: '',
      title1: '',
      title2: '',
      title3: '',
      isGenerated: false
    };

    this.reArm = this.reArm.bind(this);
}

reArm(e) {
  e.preventDefault();
  axios.get('http://localhost:5000').then(res => {
    //spread person object
    let {name, pronoun, business, desc1, problem1, problem2, problem3, timelimit, mentor1, mentor2, advice, title1, title2, title3} = res.data

    //assign to each property in state
    this.setState({name:name, pronoun:pronoun, business:business, desc1:desc1, problem1:problem1, problem2:problem2, problem3:problem3, timelimit:timelimit, mentor1:mentor1, mentor2:mentor2, advice:advice, title1:title1, title2:title2, title3:title3, isGenerated: true});
 });
}

  render() {
    let isGenerated = this.state.isGenerated;

    const renderParable = () => {
      if (isGenerated) {
        return <Summary
        name={this.state.name}
        pronoun={this.state.pronoun}
        business={this.state.business}
        desc1={this.state.desc1}
        problem1={this.state.problem1}
        problem2={this.state.problem2}
        problem3={this.state.problem3}
        timelimit={this.state.timelimit}
        mentor1={this.state.mentor1}
        mentor2={this.state.mentor2}
        advice={this.state.advice}
        title1={this.state.title1}
        title2={this.state.title2}
        title3={this.state.title3}
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

export default App;
