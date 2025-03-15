/* Bug: Filter Data Only show on Console but not the UI */

import RestaurantCard from "./RestaurantCard";
import { useState} from "react";
import resList from "../utils/mockData"

const Body = () => {
    // Local State Variable - Super Powerful Variable.
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    // console.log(listOfRestaurant)

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurant.filter(
                    (res) => res.data.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}>
                Top Rated Restuarants</button>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;
