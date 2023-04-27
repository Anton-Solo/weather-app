import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../components/Header';

test('renders header component', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const headerText = screen.getByText(/Weather App/i)
    expect(headerText).toBeInTheDocument();
})