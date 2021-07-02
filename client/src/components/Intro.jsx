import React from 'react';
import Button from 'react-bootstrap/Button';
import test from '../test2.png';

class Intro extends React.Component {
    render() {
        return(
            //make sure to destructure the incoming props and make the button appear and disappear this component
            
            <div className="app-container text-center">
                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <header>
                    </header>

                    <main className="inner cover app-introduction">
                        <h1 className='app-intro-title cover-heading'>The Business Parable Generator</h1>
                        <p class="lead">
                            Instantly generate ideas for a pithy and award-winning business parable. Escape the drudgery of having to flesh out concepts and structure persuasive arguments by presenting banal fundamentals in a patronizing and tortorous anecdotal format performed by characters who only serve as mouthpieces to explain basic topics. Quit thinking and start generating your next lifehack success with a click of a button.
                        </p>
                        <p className="generate-button btn btn-outline-secondary btn-lg">
                            <form onSubmit={this.props.reArm}>
                                <Button variant="primary" type="submit">Generate</Button>
                            </form>
                        </p>
                    </main>

                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>Created by Matt Willard. <a href="https://github.com/MHWillard/parable-gen">Check out the repo for this project.</a></p>
                        </div>
                    </footer>

                </div>

            

            {/*
            <div className="app-container container-fluid">

                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h4 className='app-intro-title'>The Business Parable Generator</h4>
                    </nav>
                        

                    <div className="col-12 main-content jumbotron">
                    
                        <div className='app-introduction jumbotron'>
                                <p>
                                    Instantly generate ideas for a pithy and award-winning business parable. Escape the drudgery of having to flesh out concepts and structure persuasive arguments by presenting banal fundamentals in a patronizing and tortorous anecdotal format performed by characters who only serve as mouthpieces to explain basic topics. Quit thinking and start generating your next lifehack success with a click of a button.
                                </p>
                        </div>

                        <div className="generate-button btn btn-outline-secondary btn-lg">
                            <form onSubmit={this.props.reArm}>
                                <Button variant="primary" type="submit">Generate</Button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            */}
            </div>
        );
    }
}

export default Intro;