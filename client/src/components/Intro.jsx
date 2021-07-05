import React from 'react';
import Button from 'react-bootstrap/Button';

class Intro extends React.Component {
    render() {
        return(            
            <div className="app-container text-center">
                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

                    
                    <main className="inner cover app-introduction row mt-2">
                        <h1 className='app-intro-title cover-heading'>The Business Parable Generator</h1>
                        <p class="lead">
                            Instantly generate ideas for a pithy and award-winning business parable. Escape the drudgery of having to flesh out concepts and structure persuasive arguments by presenting banal fundamentals in a patronizing and tortorous anecdotal format performed by characters who only serve as mouthpieces to explain basic topics. Quit thinking and start generating your next lifehack success with a click of a button.
                        </p>
                        <p className="generate-button">
                            <form onSubmit={this.props.reArm}>
                                <Button variant="primary" type="submit">Generate</Button>
                            </form>
                        </p>
                    </main>

                    <footer className="mastfoot row mt-auto">
                        <div className="inner">
                            <p>Created by Matt Willard. <a href="https://github.com/MHWillard/parable-gen">Check out the repo for this project.</a></p>
                        </div>
                    </footer>

                </div>

            </div>
        );
    }
}

export default Intro;