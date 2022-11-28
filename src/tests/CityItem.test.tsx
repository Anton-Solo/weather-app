import { render, screen } from '@testing-library/react';
import { CityItem } from '../pages/Home/components/CityItem';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

const data = {
        "coord":{"lon":30.5167,"lat":50.4333},
        "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
        "base":"stations",
        "main":{"temp":-0.22,"feels_like":-3.56,"temp_min":-0.22,"temp_max":-0.22,"pressure":996,"humidity":95},"visibility":5610,
        "wind":{"speed":2.78,"deg":305,"gust":5.97},"clouds":{"all":93},"dt":1669571341,
        "sys":{"type":2,"id":2013236,"country":"UA","sunrise":1669527044,"sunset":1669557637},
        "timezone":7200,
        "id":703448,
        "name":"Kyiv",
        "cod":200
}


describe('test with store', () => {
    const initialState = { list: [] };
    const mockStore = configureStore();
    let store;

    test('renders cityitem component', () => {
        store = mockStore(initialState);
        render(<Provider store={store}><MemoryRouter><CityItem weather={data}/></MemoryRouter></Provider>);
        const headerText = screen.getByText(/update/i)
        expect(headerText).toBeInTheDocument();
    })
})
