import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                <h1>Countries Guide</h1>
                <p>Discover interesting facts and cuisine from around the world</p>
            </header>
            <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
                <Link to="/countries">Explore Countries</Link>
            </p>
        </div>
    );
}

export default Home;