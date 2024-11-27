import { useParams } from 'react-router-dom';

const LocationDetails = () => {
  const { locationId } = useParams();
  return <div>Location Details for {locationId}</div>;
};

export default LocationDetails;
