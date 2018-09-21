import React from 'react'


const Person = ({person}) => {
    return (
        <tr><td>{person.name}</td><td>{person.number}</td></tr>
    )
}

const InputField = (props) => {
    return (
        <div>
            {props.name}: <input value={props.value} onChange={props.handler} />
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040 31337' }
            ],
            newName: '',
            newNumber: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()

        const checkName = obj => obj.name === this.state.newName
        if (this.state.persons.some(checkName)) {
            alert('Nimi on jo luettelossa!')
            return false
        }

        const nameObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }

        const persons = this.state.persons.concat(nameObject)

        this.setState({
            persons: persons,
            newName: '',
            newNumber: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <InputField name="nimi" value={this.state.newName} handler={this.handleNameChange}/>
                    <InputField name="numero" value={this.state.newNumber} handler={this.handleNumberChange}/>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                        {this.state.persons.map(person => <Person key={person.name} person={person} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App

