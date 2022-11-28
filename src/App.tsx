import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { City } from './pages/WeatherDetails/WeatherDetails';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/:name" element={<City /> } />
      </Routes>
    </>
  );
}

export default App;
