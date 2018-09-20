import React from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    const total = props.grades.good + props.grades.neutral + props.grades.bad
    const avg = (props.grades.good - props.grades.bad)/total
    const positive = (props.grades.good/total)*100 + ' %'

    return (
        <div>
            <Statistic name="hyvä" value={props.grades.good}/>
            <Statistic name="neutraali" value={props.grades.neutral}/>
            <Statistic name="huono" value={props.grades.bad}/>
            <Statistic name="keskiarvo" value={avg}/>
            <Statistic name="positiivisia" value={positive}/>
        </div>
    )
}

const Statistic = (props) => {
    return (
        <p>{props.name} {props.value}</p>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handler}>{props.name}</button>
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
                <Button handler={this.goodClick} name="hyvä"/>
                <Button handler={this.neutralClick} name="neutraali"/>
                <Button handler={this.badClick} name="huono"/>
                <h1>statistiikka</h1>
                <Statistics grades={this.state}/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)