import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/admin/userContext'; // Import UserProvider
import Home from './components/Home';
import LocationPage from './components/LocationPage';
import LocationDetails from './components/LocationDetails';
import Login from './components/Login';
import ViewListings from './components/admin/ViewListings';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/view-listings" element={<ViewListings />} />
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/locations/:locationId" element={<LocationDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
