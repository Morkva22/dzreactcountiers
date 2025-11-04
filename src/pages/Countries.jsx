import { Link } from 'react-router-dom';
import { countries } from '../data';

function Countries() {
    return (
        <div>
            <h1>Countries</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {countries.map((country) => (
                    <li key={country.id} style={{ margin: '10px 0' }}>
                        <Link
                            to={`/countries/${country.id}`}
                            style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/" style={{ color: '#6c757d', textDecoration: 'underline' }}>
                Back to Home
            </Link>
        </div>
    );
}

export default Countries;