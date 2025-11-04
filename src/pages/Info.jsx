import { useOutletContext } from 'react-router-dom';

function Info() {
    const { country } = useOutletContext();

    return (
        <div>
            <h2>Interesting Facts</h2>
            <ul>
                {country.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
}

export default Info;