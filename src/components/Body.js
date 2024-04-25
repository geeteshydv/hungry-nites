import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { swiggy_api_url, img_cdn_url } from "../utils/Config";
import { Link, useParams } from "react-router-dom";
/*---------------------------------------------Restaurant Card-------------------------- */
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  locality,
  avgRating,
  costForTwo,
  sla,
}) => {
  return (
    <div className="w-[250px] m-5 rounded-lg shadow-2xl border-0.5 border-gray-10 overflow-hidden hover:scale-95 cursor-pointer">
      <img
        className="rounded-3xl p-3 h-[200px] w-full"
        src={img_cdn_url + cloudinaryImageId}
        alt=""
      />
      <div className="font-bold text-xl ml-2 ">{name}</div>
      <div className="pl-2 text-sm font-light">{cuisines.join(", ")}</div>
      <div className="flex justify-around mb-3 mt-2">
        <div className="ml-2 bg-green-500 pr-2 text-white font-bold rounded-md">
          ⭐{avgRating}
        </div>
        {"•"}
        <div className="font-medium ml-1 mr-1">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </div>
        {"•"}
        <div className="font-medium ml-1 mr-3">
          {costForTwo ?? "₹200 for two"}
        </div>
      </div>
    </div>
  );
};
/*---------------------------------------------------------------------------------- */

function filterRestaurant(allRestaurants, searchText) {
  const filterDataa = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterDataa;
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const { id } = useParams();
  /*-------------------------------- API-call -------------------------- */
  async function getdata() {
    const response = await fetch(swiggy_api_url);
    const json = await response.json();
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  }
  useEffect(() => {
    getdata();
  }, []);

  if (allRestaurants.length == 0) {
    return <Shimmer />;
  } else {
    return (
      <>
        <div className="flex justify-center h-12 m-6">
          <input
            className="pl-[14px] w-[300px] rounded-l-lg  border border-black"
            type="text"
            placeholder="Search for restaurants and food...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="h-12 bg-green-500 w-[60px] rounded-r-lg text-sm"
            onClick={() => {
              const data = filterRestaurant(allRestaurants, searchText);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center -z-10">
          {filteredRestaurants.map((cur_restaurant, index) => {
            return (
              <Link to={"/restaurant/" + cur_restaurant.info.id}>
                <RestaurantCard {...cur_restaurant.info} key={index} />
              </Link>
            );
          })}
        </div>
      </>
    );
  }
};

export default Body;
