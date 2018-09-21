import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi.nimi}</h1>
        </div>
    )
}


const Osa = (props) => {
    return (
        <div>
            <p>{props.name} {props.tehtavia}</p>
        </div>
    )
}

const Sisalto = ({kurssi}) => {
    return (
        <div>
            {kurssi.osat.map(osa=><Osa key={osa.id} name={osa.nimi} tehtavia={osa.tehtavia}/>)}
        </div>
    )
}

const Yhteensa = ({kurssi}) => {

    const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.tehtavia, 0)
    const yht = kurssi.osat.reduce(reducer, 0);

    return (
        <div>
            <p>yhteensä {yht} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Kurssi kurssi={kurssi} />
        </div>
    )
}

ReactDOM.render(
<App />,
    document.getElementById('root')
)