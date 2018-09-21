import React from 'react'


const Person = ({person}) => {
    return (
        <li>{person.name}</li>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: this.state.newName,
        }

        const persons = this.state.persons.concat(nameObject)

        this.setState({
            persons: persons,
            newName: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addName}>
                    <div>
                        nimi: <input value={this.state.newName}
                                     onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {this.state.persons.map(person => <Person key={person.name} person={person} />)}
                </ul>
            </div>
        )
    }
}

export default App

