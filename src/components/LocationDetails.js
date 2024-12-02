import { useParams, useLocation } from 'react-router-dom';
import Header from './layouts/Header';

const LocationDetails = () => {
    const { locationId } = useParams();
    const location = useLocation();
    const { checkInDate, checkOutDate, adults, children } = location.state || {};

    return (
        <div>
            <Header />
            <h1>Location Details for {locationId}</h1>
            <p>Check In Date: {checkInDate ? new Date(checkInDate).toDateString() : "Not selected"}</p>
            <p>Check Out Date: {checkOutDate ? new Date(checkOutDate).toDateString() : "Not selected"}</p>
            <p>Adults: {adults}</p>
            <p>Children: {children}</p>
        </div>
    );
};

export default LocationDetails;


