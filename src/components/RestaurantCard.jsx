import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, slaString, cloudinaryImageId, avgRating} = resData;
    return (
        <div className="restaurant-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}

export default RestaurantCard;