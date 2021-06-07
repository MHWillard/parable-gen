import React from 'react';
import Button from 'react-bootstrap/Button';


class Intro extends React.Component {
    render() {
        return(
            //make sure to destructure the incoming props and make the button appear and disappear this component
            <div>
                <div className='app-introduction'>
                    <p>
                        Instantly generate ideas for a pithy and award-winning business parable! Escape the drudgery of having to flesh out ideas and structure persuasive arguments by presenting banal topics in a patronizing ancedotal format performed by characters who only serve as mouthpieces to explain basic concepts. Quit thinking and start generating your next lifehack success with a click of a button!
                    </p>
                </div>
                
                <div className='generate-button'>
                    <form onSubmit={this.props.reArm}>
                        <Button variant="primary" type="submit">Generate</Button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Intro;