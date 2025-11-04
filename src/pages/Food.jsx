import { useOutletContext } from 'react-router-dom';

function Food() {
    const { country } = useOutletContext();

    return (
        <div>
            <h2>Popular Dishes</h2>
            <ul>
                {country.dishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                ))}
            </ul>
        </div>
    );
}

export default Food;