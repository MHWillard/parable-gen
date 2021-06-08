import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Intro extends React.Component {
    render() {
        return(
            //make sure to destructure the incoming props and make the button appear and disappear this component
            <Container>
                <Row>
                    <Col>
                <div className='app-introduction'>
                    <p>The Business Parable Generator</p>
                    <p>
                        Instantly generate ideas for a pithy and award-winning business parable! Escape the drudgery of having to flesh out ideas and structure persuasive arguments by presenting banal topics in a patronizing ancedotal format performed by characters who only serve as mouthpieces to explain basic concepts. Quit thinking and start generating your next lifehack success with a click of a button!
                    </p>
                </div>

                <div className='generate-button'>
                    <form onSubmit={this.props.reArm}>
                        <Button variant="primary" type="submit">Generate</Button>
                    </form>
                </div>
                    </Col>

                    <Col>
                <div className='intro-photo'>
                    (a photo of a businessman is going to go here)
                </div>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Intro;