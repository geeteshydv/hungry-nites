import React, { useEffect, useState } from "react";
import {
  swiggy_restaurant_api_url_part1,
  swiggy_restaurant_api_url_part2,
} from "../utils/Config";
const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);

  async function getMenuData() {
    const response = await fetch();
    const json = await response.json();
  }
  useEffect(() => {
    getMenuData();
  }, []);
  return <></>;
};

export default RestaurantMenu;
