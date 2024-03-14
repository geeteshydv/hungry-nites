import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { swiggy_api_url, img_cdn_url } from "../utils/Config";

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
    <div className="w-[250px]  m-5 rounded-lg shadow-2xl border-0.5 border-gray-10 overflow-hidden hover:scale-95 cursor-pointer">
      <img
        className="rounded-3xl p-3"
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

const Body = () => {
  const [data, setData] = useState([]);
  async function getdata() {
    const response = await fetch(swiggy_api_url);
    const json = await response.json();
    setData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  }
  useEffect(() => {
    getdata();
  }, []);

  if (data.length == 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="flex flex-wrap justify-center m-2 ">
        {data.map((cur_restaurant, index) => {
          return <RestaurantCard {...cur_restaurant.info} key={index} />;
        })}
      </div>
    );
  }
};

export default Body;
