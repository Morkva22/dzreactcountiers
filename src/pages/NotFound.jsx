import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, we couldn't find that page.</p>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
                Go back to Home
            </Link>
        </div>
    );
}

export default NotFound;