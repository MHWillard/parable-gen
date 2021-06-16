import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import test from '../test2.png'

class Intro extends React.Component {
    render() {
        return(
            //make sure to destructure the incoming props and make the button appear and disappear this component
            <div className="app-container container">
                <div className="row">
                    <div className="col-8">
                        <div className='app-introduction'>
                            <h1 className='app-intro-title'>The Business Parable Generator</h1>
                                <p>
                                    Instantly generate ideas for a pithy and award-winning business parable. Escape the drudgery of having to flesh out ideas and structure persuasive arguments by presenting banal topics in a patronizing and tortorous anecdotal format performed by characters who only serve as mouthpieces to explain basic concepts. Quit thinking and start generating your next lifehack success with a click of a button.
                                </p>
                        </div>

                        <div className='generate-button'>
                            <form onSubmit={this.props.reArm}>
                                <Button variant="primary" type="submit">Generate</Button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div>
                            <img src={test} className='app-photo img-fluid' />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Intro;