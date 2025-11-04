import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryProfile from './pages/CountryProfile';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/countries/:id/*" element={<CountryProfile />} />
                <Route path="/all-countries" element={<Navigate to="/countries" replace />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;