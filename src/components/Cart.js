import React from "react";
import { useSelector } from "react-redux";
import { img_cdn_url } from "../utils/Config";
import { useState } from "react";
const RestaurantMenuList = ({
  imageId,
  name,
  id,
  description,
  defaultPrice,
  ratings,
  quantity,
}) => {
  return (
    <>
      <div className="lg:mx-[250px]  md:ml-[100px] m-3 bg-[#edecec] font-mono  lg:w-[full]  md:w[400px] rounded-md p-3 shadow-lg">
        <div className="flex w-[full]  font-semibold">
          <div className="mr-2">
            {name}
            {","}
          </div>
          <div>{quantity + "-items"}</div>
        </div>
        <div className="">{"₹" + quantity * defaultPrice}</div>
        <div className="">
          {ratings?.aggregatedRating?.rating
            ? "⭐" +
              ratings?.aggregatedRating?.rating +
              " (" +
              ratings?.aggregatedRating?.ratingCountV2 +
              ")"
            : ""}
        </div>
        <div className="flex items-center">
          <div className=" font-mono">{description}</div>
          {
            <img
              src={img_cdn_url + imageId}
              alt="failed"
              className="h-[100px] w-[100px] "
            />
          }
        </div>
      </div>
    </>
  );
};

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const [sum, setSum] = useState(0);
  return (
    <>
      {cart.map((item, idx) => (
        <RestaurantMenuList {...item} key={idx} />
      ))}
      <div>Cart total</div>
    </>
  );
};

export default Cart;
