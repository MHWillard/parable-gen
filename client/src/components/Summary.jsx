import React from 'react'
import Button from 'react-bootstrap/Button';

class Summary extends React.Component {

    render() {
        const {name, business, desc1, problem1, problem2, problem3, timelimit, mentor1, mentor2, advice, title1, title2, title3} = this.props

        return(
            <div className="app-container text-center">
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

            <main className="inner cover app-introduction row mt-2">
                <h1 className='app-intro-title cover-heading'>{title1}</h1>
                    <p class="lead parable-summary">
                        A successful {business} and {desc1}, {name}'s life is turned upside down when she discovers {problem1}. {name} soon finds herself backed against a wall - losing money fast, {problem2} and {problem3}, {name} has no idea what to do and only {timelimit} to turn things around. But one day, she has a chance encounter with a {mentor1} {mentor2} who imparts some unexpected advice. Through {advice}, {name} may have a chance to save her failing business. Can {name} master her mentor's advice and turn things around, or is it too late?
                    <p>
                        "{title1}" is a timeless tale full of valuable insights and extremely common life advice, from the celebrated author of "{title2}" and "{title3}". Order your copy today.
                    </p>
                    </p>

            <p className="generate-button">
                <form onSubmit={this.props.reArm}>
                    <Button variant="primary" type="submit">Generate Another</Button>
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

export default Summary;