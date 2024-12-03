import { useParams, useLocation } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import Header from './layouts/Header';
import LocationCard from './LocationCard';
import "./Locations.css";


const allLocations = [
    {
        src: "https://a0.muscache.com/im/pictures/cecd1331-77af-4dbc-87d0-655b55bb40fc.jpg?im_w=720&im_format=avif",
        title: "Paris Getaway",
        text: "Entire home in Paris",
        info: "4-6 guests · Entire Home · 5 beds · 3 bath Wifi · Kitchen · Free Parking",
        rating: 5.0,
        review: 318,
        price: 245,
        location: "paris",
    },
    {
        src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1142048721696770947/original/e4571cf9-b8cf-4cfa-bcac-77b45dd453c2.png",
        title: "Hotel in New York",
        text: "NYC Oasis. Sightseeing. Fitness Center",
        info: "Free cancellation",
        rating: 4.9,
        review: 23,
        price: 132,
        location: "new-york",
    },
    {
        src:"https://a0.muscache.com/im/pictures/hosting/Hosting-1027518763993844240/original/97627c88-bd1c-49fb-a371-447e82ece779.jpeg?im_w=1200&im_format=avif", 
        text:"Entire guest suite in New York, United States",
        title:"Lovely Harlem Brownstone Oasis",
        info:"2 guests · 1 bedroom · 2 beds · 1 bath",
        rating:5.0,
        review:19,
        price:200,
        location: "new-york",
    },
    {
        src:"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDk3NjA5MTg0MTQ0NzUwOA%3D%3D/original/a30d9a28-596f-4357-99e7-2cc8dfd93662.png?im_w=1200&im_format=avif",
        text:"Room with stunning Eiffel Tower and Seine view!",
        title:"Room in Paris, France",
        info:"Stay with Arthur · Art Curator",
        rating:5.0,
        review:59,
        price:229,
        location: "paris",
    },
    {
        src:"https://a0.muscache.com/im/pictures/miso/Hosting-1000649259803737931/original/523d1ab8-ae3d-4c69-84f8-4e7668884e46.png?im_w=720&im_format=avif",
        text:"Ichiyu Hotel Asakusa-Economy Room",
        title:"Entire rental unit in Taito City, Japan",
        info:"Free Cancellation · 2 guests · 1 bedroom · 1 bed · 1 bath",
        rating:5.0,
        review:9,
        price:72,
        location: "tokyo"
    },
    {
        src:"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI0NTgyNTg0MTM3Mjg2NzcwNQ%3D%3D/original/236c56b4-da0e-48db-98dd-b438b8cacd89.jpeg?im_w=720&im_format=avif",
        text:"2BR/95㎡/5mins to Kagurazaka Station/Shinjuku area",
        title:"Entire rental unit in Shinjuku City, Japan",
        info:"16 guests · 2 bedrooms · 9 beds · 2 baths",
        rating:5.0,
        review:11,
        price:146,
        location: "tokyo",
    },
    {
        src:"https://a0.muscache.com/im/pictures/miso/Hosting-1123046536385412855/original/8578cfdf-7cc2-4416-b3fb-a156d310ee17.jpeg?im_w=720&im_format=avif",
        text:"Tiny home in Cape Town, South Africa",
        title:"Bungalo in Cape Town",
        info:"Free Cancellation · 2 guests · 1 bedroom · 1 bed · 1 bath",
        rating:5.0,
        review:41,
        price:135,
        location: "cape-town",
    },
    {
        src:"https://a0.muscache.com/im/pictures/83e53ebb-0d5f-42d6-8f5c-91d1027e75a6.jpg?im_w=720&im_format=avif",
        text:"Entire serviced apartment in Cape Town, South Africa",
        title:"Admire Sea Views from a Stunning Apartment by Clifton Beach",
        info:"2 guests · 1 bedroom · 1 bed · 1 bath",
        rating:4.9,
        review:722,
        price:420,
        location: "cape-town",
    },
    {
        src:"https://a0.muscache.com/im/pictures/hosting/Hosting-1230872733126801633/original/7f0e9100-2e60-4ba7-b159-31a7cccef1b0.jpeg?im_w=720&im_format=avif",
        text:"Koh Phangan Jungle Villa Infinity Pool & Sea Views",
        title:"Entire villa in Ko Pha Ngan, Thailand",
        info:"2 guests · 1 bedroom · 1 bed · 1 bath",
        rating:5.0,
        review:3,
        price:115,
        location: "thailand",
    },
    {
        src:"https://a0.muscache.com/im/pictures/miso/Hosting-1265827112608717058/original/3e011da6-aa95-4b3d-8fc0-72ad25bfb9ee.jpeg?im_w=1200&im_format=avif",
        text:"Samadhi Loft - designer loft with unique sea view",
        title:"Entire home in Bo Put, Thailand",
        info:"6 guests · 3 bedrooms · 3 beds · 3.5 baths",
        rating:5.0,
        review:2,
        price:255,
        location: "thailand",
    }    
];

const Locations = () => {
    const { locationId = "all-locations" } = useParams();

    const location = useLocation();
    const { checkInDate, checkOutDate, adults, children } = location.state || {};

    // Filtering locations based on the locationId
    const filteredLocations = locationId === "all-locations"
        ? allLocations
        : allLocations.filter((loc) => loc.location.toLowerCase() === locationId.toLowerCase());

    // Debugging the filteredLocations array
    console.log("Filtered Locations:", filteredLocations);

    return (
        <div className="locations">
            <Header />
            <div className="locations_filter">
                <div className="locations_filter_price">
                    <p>Price</p>
                    <ExpandMoreIcon />
                </div>
                <div className="locations_filter_place">
                    <p>Type of place</p>
                    <ExpandMoreIcon />
                </div>
                <div className="locations_filter_options">
                    <p>Free cancellation</p>
                    <p>Wifi</p>
                    <p>Kitchen</p>
                    <p>Air conditioning</p>
                    <p>Washer</p>
                    <p>Iron</p>
                    <p>Dedicated workspace</p>
                    <p>Free parking</p>
                    <p>Dryer</p>
                </div>
                <div className="locations_filter_filters">
                    <TuneIcon />
                    <p>Filters</p>
                </div>
            </div>
            <h1>{locationId}</h1>
            <div className="location_selected_options">
                <div className="location_selected_check_in">
                    <p>Check In Date:</p>
                    <p>{checkInDate ? new Date(checkInDate).toDateString() : "Not selected"}</p>
                </div>
                <span>|</span>
                <div className="location_selected_check_out">
                    <p>Check Out Date:</p>
                    <p>{checkOutDate ? new Date(checkOutDate).toDateString() : "Not selected"}</p>
                </div>
                <span>|</span>
                <div className="location_selected_travellers">
                    <p>Adults: {adults}</p>
                    <p>Children: {children}</p>
                </div>
            </div>
            <h4>{filteredLocations.length}+ stays in {locationId.replace("-", " ")}</h4>
            <div className="locations_cards">
                {filteredLocations.length > 0 ? (
                    filteredLocations.map((loc, index) => (
                        <LocationCard key={index} {...loc} />
                    ))
                ) : (
                    <p>No locations available for "{locationId.replace("-", " ")}"</p>
                )}
            </div>
        </div>
    );
};

export default Locations;


