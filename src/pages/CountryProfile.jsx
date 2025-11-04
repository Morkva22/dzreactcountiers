import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import { countries } from '../data';
import Info from './Info';
import Food from './Food';
import NotFound from './NotFound';

function CountryProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const country = countries.find((c) => c.id === id);

    if (!country) return <NotFound />;

    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.description}</p>

            <nav>
                <Link to="info">Info</Link>
                <Link to="food">Food</Link>
            </nav>

            <Outlet context={{ country }} />

            <button onClick={() => navigate(-1)} className="back-btn">
                Back
            </button>
        </div>
    );
}

export default function CountryProfileRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CountryProfile />}>
                <Route index element={<p style={{ fontStyle: 'italic', color: '#6c757d' }}>Select a tab: Info or Food</p>} />
                <Route path="info" element={<Info />} />
                <Route path="food" element={<Food />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}