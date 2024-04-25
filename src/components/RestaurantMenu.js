import React, { useEffect, useState } from "react";
import {
  swiggy_restaurant_api_url_part1,
  swiggy_restaurant_api_url_part2,
  img_cdn_url,
  MENU_ITEM_TYPE_KEY,
} from "../utils/Config";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
/*-----------------------------------------------------------------------------*/
const RestaurantMenuList = ({
  imageId,
  name,
  id,
  description,
  defaultPrice,
  ratings,
}) => {
  const dispatch = useDispatch();
  function handleAddClick({
    imageId,
    name,
    id,
    description,
    defaultPrice,
    ratings,
  }) {
    dispatch(
      addItems({
        imageId,
        name,
        id,
        description,
        defaultPrice,
        ratings,
      })
    );
  }
  function handleRemoveClick() {
    dispatch(removeItems());
  }
  const [showMenuDescription, setShowMenuDescription] = useState(false);
  return (
    <>
      <div className="lg:mx-[250px]  md:ml-[100px] m-3 bg-[#edecec] font-mono  lg:w-[full]  md:w[400px] rounded-md p-3 shadow-lg">
        <div className="flex w-[full] justify-between items-center font-semibold">
          <div>{name}</div>
          <button
            className=""
            onClick={() => setShowMenuDescription(!showMenuDescription)}
          >
            {showMenuDescription ? "⬆️" : "⬇️"}
          </button>
        </div>
        <div className="">
          {showMenuDescription && defaultPrice ? "₹" + defaultPrice : ""}
        </div>
        <div className="">
          {showMenuDescription && ratings?.aggregatedRating?.rating
            ? "⭐" +
              ratings?.aggregatedRating?.rating +
              " (" +
              ratings?.aggregatedRating?.ratingCountV2 +
              ")"
            : ""}
        </div>
        <div className="flex items-center">
          <div className=" font-mono">
            {showMenuDescription ? description : ""}
          </div>
          {showMenuDescription ? (
            <img
              src={img_cdn_url + imageId}
              alt="failed"
              className="h-[100px] w-[100px] "
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-end ">
          {showMenuDescription ? (
            <button
              className="bg-white my-2 w-[35px]"
              onClick={() => handleRemoveClick(name)}
            >
              {" "}
              -
            </button>
          ) : (
            ""
          )}
          {showMenuDescription ? (
            <button
              className="bg-white my-2  w-[35px]"
              onClick={() =>
                handleAddClick({
                  imageId,
                  name,
                  id,
                  description,
                  defaultPrice,
                  ratings,
                })
              }
            >
              +
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
const RestaurantMenu = () => {
  async function getMenuData() {
    const response = await fetch(
      swiggy_restaurant_api_url_part1 + id + swiggy_restaurant_api_url_part2
    );
    const json = await response.json();
    // console.log(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    // console.log(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
    setMenuData(
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || []
    );
    console.log(
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || []
    );
  }
  const [menuData, setMenuData] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMenuData();
  }, []);
  if (!menuData || menuData.length === 0) {
    return <RestaurantMenuShimmer />;
  } else
    return (
      <>
        <div className="bg-[#000033] h-[200px] text-white flex ">
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
            <div className="flex space-x-6">
              <div>{restaurantInfo?.costForTwoMessage}</div>
              <div>{restaurantInfo?.avgRating}</div>
              <div> {restaurantInfo?.sla?.minDeliveryTime + " mins"}</div>
            </div>
          </div>
        </div>
        <div className="ml-[250px] p-3">
          <div>{"Recommended "}</div>
          <div>{menuData.length + " items"}</div>
        </div>
        {menuData.map((cur_restaurant, index) => {
          return (
            <>
              <RestaurantMenuList {...cur_restaurant} key={index} />
            </>
          );
        })}
      </>
    );
};

export default RestaurantMenu;
