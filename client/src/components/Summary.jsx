import React from 'react'


class Summary extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {name, business, desc1, problem1, problem2, problem3, timelimit, mentor1, mentor2, advice, title1, title2, title3} = this.props

        return(
            <div>
                <div className='parable-summary'>
                <p>
                    A successful {business} and {desc1}, {name}'s life is turned upside down when she discovers {problem1}. {name} soon finds herself backed against a wall - losing money fast, {problem2} and {problem3}, {name} has no idea what to do and only {timelimit} to turn things around. But one day, she has a chance encounter with a {mentor1} {mentor2} who imparts some unexpected advice. Through {advice}, {name} may have a chance to save her failing business. Can {name} master her mentor's advice and turn things around, or is it too late?
                </p>
                <p>
                    "{title1}" is a timeless tale full of valuable insights and extremely common life advice, from the celebrated author of "{title2}" and "{title3}". Order your copy today.
                </p>
                </div>
                
                <div className='generate-button'>
                    <form onSubmit={this.props.reArm}>
                        <button type="submit">Generate Another</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Summary;