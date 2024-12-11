import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []) // empty dependency array means useEffect is called only on initial Render, Note: useEffect is called after the component is rendered

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.89960&lng=80.22090&str=Biryani&trackingId=bedc3bc1-cc36-8aec-097b-84c2a6f75f67&submitAction=ENTER&queryUniqueId=8eb45c97-bcee-a745-ec32-7a47fb4965bf")
        const jsonData = await data.json();
        const cards = jsonData.data.cards[1].groupedCard.cardGroupMap["DISH"].cards;
        cards.shift();
        setRestaurantList(cards);
        setFilteredRestaurants(cards);
        return cards;
    }

    const filterTopRestaurants = (resList) => {
        let filteredList = resList.filter((res) => res?.card?.card?.restaurant?.info?.avgRating > 4)
        setRestaurantList(filteredList);
    }

    const searchRestaurants = () => {
        const filteredRestaurants = restaurantList?.filter(res => res?.card?.card?.restaurant?.info.name.toLowerCase().includes(searchText));
        console.log(filteredRestaurants);
        setFilteredRestaurants(filteredRestaurants);
    }

    return restaurantList == null || restaurantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => searchRestaurants()}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => filterTopRestaurants(restaurantList)} onMouseOver={() => console.log('hover')}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants?.map((restaurant) => {
                    return <Link to={`/restaurant/${restaurant?.card?.card?.info?.id}`}><RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant?.card?.card?.restaurant?.info} /></Link>
                })}
            </div>
        </div>
    );
}

export default Body;