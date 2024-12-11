import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const {resId} = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${resId}`);
    const json = await data.json();
    setResInfo(json.data);
  }



  if (resInfo === null) return <Shimmer />
  const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;


  return (
    <div className="res-menu">
      <h1>Name of the restaurant:{name}</h1>
      <h2>Cuisines: {cuisines.join(", ")}</h2>
      <h2>Rating: {avgRating}</h2>
      <h2>Cost for two: {costForTwoMessage}</h2>
    </div>
  )
}
