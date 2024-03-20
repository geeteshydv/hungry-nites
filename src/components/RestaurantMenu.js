import React, { useEffect, useState } from "react";
import {
  swiggy_restaurant_api_url_part1,
  swiggy_restaurant_api_url_part2,
  img_cdn_url,
} from "../utils/Config";
import { useParams } from "react-router-dom";

const RestaurantMenuList = ({ cloudinaryImageId, name }) => {
  return (
    <>
      <div>{name}</div>
      <img src={img_cdn_url + cloudinaryImageId} alt="" />
    </>
  );
};
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();
  console.log(id);
  async function getMenuData() {
    const response = await fetch(
      swiggy_restaurant_api_url_part1 + id + swiggy_restaurant_api_url_part2
    );
    const json = await response.json();
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setMenuData(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }
  useEffect(() => {
    getMenuData();
  }, []);
  if (!menuData) {
    return null;
  } else
    return (
      <>
        {menuData.map((cur_restaurant, index) => {
          return (
            <RestaurantMenuList {...cur_restaurant.card.info} key={index} />
          );
        })}
      </>
    );
};

export default RestaurantMenu;
