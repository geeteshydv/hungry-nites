import React, { useEffect, useState } from "react";
import {
  swiggy_restaurant_api_url_part1,
  swiggy_restaurant_api_url_part2,
  img_cdn_url,
} from "../utils/Config";
import { useParams } from "react-router-dom";

const RestaurantMenuList = ({ imageId, name, id }) => {
  return (
    <>
      <div>
        <div>{name}</div>
        <img
          src={img_cdn_url + imageId}
          alt="failed"
          className="h-[200px] w-[300px]"
        />
      </div>
    </>
  );
};
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const { id } = useParams();
  console.log(id);
  async function getMenuData() {
    const response = await fetch(
      swiggy_restaurant_api_url_part1 + id + swiggy_restaurant_api_url_part2
    );
    const json = await response.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    setMenuData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    // console.log(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
  }
  useEffect(() => {
    getMenuData();
  }, []);
  if (!restaurantInfo || !menuData) {
    return null;
  } else
    return (
      <>
        <div className="bg-[rgb(23,23,23)] h-[200px] text-white flex ">
          <img
            src={img_cdn_url + restaurantInfo?.cloudinaryImageId}
            alt={restaurantInfo?.name}
            className="h-[200px] w-[250px] ml-[250px] p-3 rounded-2xl"
          />
          <div className="ml-10">
            <div className="lg:text-4xl  pt-10 md:text-2xl">
              {restaurantInfo.name}
            </div>
            <div className="text-gray-400 mr-14 pt-2 md:text-xs lg:text-sm">
              {restaurantInfo?.cuisines
                ? restaurantInfo.cuisines.join(", ")
                : ""}
            </div>
            <div>{restaurantInfo?.costForTwoMessage}</div>
            <div>{restaurantInfo?.avgRating}</div>
            <div> {restaurantInfo?.sla?.minDeliveryTime + " mins"}</div>
          </div>
        </div>
        {menuData.map((cur_restaurant, index) => {
          return (
            <>
              <RestaurantMenuList {...cur_restaurant.card.info} key={index} />
            </>
          );
        })}
      </>
    );
};

export default RestaurantMenu;
