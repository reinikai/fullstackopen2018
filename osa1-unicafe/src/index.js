import React from 'react'
import ReactDOM from 'react-dom'

const Stats = (props) => {

    const total = props.grades.good + props.grades.neutral + props.grades.bad
    const avg = (props.grades.good - props.grades.bad)/total
    const positive = (props.grades.good/total)*100

    return (
        <div>
            <p>hyvä {props.grades.good}</p>
            <p>neutraali {props.grades.neutral}</p>
            <p>huono {props.grades.bad}</p>
            <p>keskiarvo {avg}</p>
            <p>positiivisia {positive} %</p>
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