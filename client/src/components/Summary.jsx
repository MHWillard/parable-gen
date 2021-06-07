import React from 'react'


class Summary extends React.Component {
    render() {
        return(
            //make sure to destructure the incoming props and make the button appear and disappear this component
            <div>
                <div className='parable-summary'>
                <p>
                    {this.props.firstname} {this.props.lastname}, successful {this.props.age}-year-old {this.props.business} professional, thought they were doing well. But all of a sudden, a bad stroke of luck pushes {this.props.firstname} against the wall, with nowhere to run. With her {this.props.business} business on the line and children about to be shipped to Bosnia, {this.props.firstname} has the biggest challenge to take on: make {this.props.moneygoal} dollars. If {this.props.firstname} {this.props.problem}. With nowhere else to turn, {this.props.firstname} has to place all of her hopes into the words of a wandering mentor. Can {this.props.firstname} {this.props.goal}?
                </p>
                </div>
                
                <div className='generate-button'>
                    <form onSubmit={this.props.reArm}>
                        <button type="submit">Generate</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Summary;