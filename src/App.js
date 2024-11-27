import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/layouts/Header';
import LocationPage from './components/LocationPage';
import LocationDetails from './components/LocationDetails';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Location Page */}
          <Route path="/locations" element={<LocationPage />} />

          {/* Dynamic Location Details Page */}
          <Route path="/locations/:locationId" element={<LocationDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

