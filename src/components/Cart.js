import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { img_cdn_url } from "../utils/Config";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.defaultPrice * item.quantity,
      0
    );
    setSum(total);
  }, [cart]);

  const formatPrice = (price) => {
    return parseFloat(price.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            Your cart is empty. Add some delicious food to your cart!
          </div>
        ) : (
          <>
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="m-3 bg-[#edecec] font-mono rounded-md p-3 shadow-lg lg:mx-[250px] md:ml-[100px]"
              >
                <div className="flex justify-between items-center font-semibold">
                  <div className="flex items-center">
                    <div className="mr-2">
                      {item.name}
                      {","}
                    </div>
                    <div>{item.quantity + " items"}</div>
                  </div>
                  <div>
                    {"₹" + formatPrice(item.quantity * item.defaultPrice)}
                  </div>
                </div>
                <div className="text-gray-600 mt-1">
                  {item.ratings?.aggregatedRating?.rating
                    ? "⭐" +
                      item.ratings?.aggregatedRating?.rating +
                      " (" +
                      item.ratings?.aggregatedRating?.ratingCountV2 +
                      ")"
                    : ""}
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-gray-700">{item.description}</div>
                  {item.imageId && (
                    <img
                      src={img_cdn_url + item.imageId}
                      alt="food"
                      className="h-[100px] w-[100px] ml-auto rounded-lg shadow-md"
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="mt-6 text-lg font-bold text-right">
              Total: ₹{formatPrice(sum)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
