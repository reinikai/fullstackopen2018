import React from 'react'
import ReactDOM from 'react-dom'

const Stats = (props) => {
    return (
        <div>
            <p>hyvä {props.grades.good}</p>
            <p>neutraali {props.grades.neutral}</p>
            <p>huono {props.grades.bad}</p>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    goodClick = () => {
        this.setState({
            good: this.state.good + 1,
        })
    }

    neutralClick = () => {
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }

    badClick = () => {
        this.setState({
            bad: this.state.bad + 1,
        })
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <button onClick={this.goodClick}>hyvä</button>
                <button onClick={this.neutralClick}>neutraali</button>
                <button onClick={this.badClick}>huono</button>
                <h1>statistiikka</h1>
                <Stats grades={this.state}/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)