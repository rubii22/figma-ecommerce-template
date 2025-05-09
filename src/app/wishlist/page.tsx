"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const WishlistCard = ({ item }: { item: any }) => {
  const [showAddToCart, setShowAddToCart] = useState(false);

  return (
    <div
      className="relative border rounded-lg overflow-hidden hover:shadow-lg"
      onMouseEnter={() => setShowAddToCart(true)}
      onMouseLeave={() => setShowAddToCart(false)}
    >
      {/* Discount Badge */}
      {item.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {item.discount}
        </div>
      )}

      {/* Delete Icon */}
      <div className="absolute top-2 right-2">
        <TrashIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-red-500" />
      </div>

      {/* Image Section */}
      <div className="relative w-full h-52">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain"
        />
        {/* Add to Cart Button */}
        {showAddToCart && (
          <button className="absolute bottom-0 left-0 right-0 mx-auto bg-black text-white py-1 w-full text-center rounded-none transition duration-300 hover:bg-gray-700">
            Add To Cart
          </button>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>

      {/* Price */}
      <div className="flex items-center space-x-2 mt-1">
        <div className="text-red-500 font-bold">{item.price}</div>
        {item.oldPrice && (
          <div className="text-gray-400 text-sm line-through">{item.oldPrice}</div>
        )}
      </div>
    </div>
  );
};

export default function Wishlist() {
  // Dummy Data for Wishlist
  const wishlistItems = [
    {
      id: 1,
      image: "/bag.png",
      title: "Gucci Duffle Bag",
      price: "$960",
      oldPrice: "$1160",
      discount: "-35%",
    },
    {
      id: 2,
      image: "/speaker.png",
      title: "RGB Liquid CPU Cooler",
      price: "$1960",
    },
    {
      id: 3,
      image: "/shooterusb.png",
      title: "GP11 Shooter USB Gamepad",
      price: "$550",
    },
    {
      id: 4,
      image: "/jacket.png",
      title: "Quilted Satin Jacket",
      price: "$750",
    },
  ];

  // Dummy Data for Just For You Section
  const justForYouItems = [
    {
      id: 1,
      image: "/laptop.png",
      title: "ASUS FHD Gaming Laptop",
      price: "$960",
      oldPrice: "$1160",
      discount: "-35%",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/sticker.png",
      title: "IPS LCD Gaming Monitor",
      price: "$1160",
      rating: 4.0,
    },
    {
      id: 3,
      image: "/gaming.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$560",
      badge: "NEW",
      rating: 4.2,
    },
    {
      id: 4,
      image: "/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: "$200",
      rating: 3.8,
    },
  ];

  return (
    <main className="p-6">
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Wishlist ({wishlistItems.length})</h1>
        <button className="bg-black text-white px-4 py-2 rounded">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>

      {/* Just For You Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-red-500">Just For You</h2>
          <button className="text-black px-4 py-2 border border-black rounded">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {justForYouItems.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-lg overflow-hidden hover:shadow-lg"
            >
              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </div>
              )}

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {item.badge}
                </div>
              )}

              {/* Image */}
              <div className="w-full h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-1">
                <div className="text-red-500 font-bold">{item.price}</div>
                {item.oldPrice && (
                  <div className="text-gray-400 text-sm line-through">
                    {item.oldPrice}
                  </div>
                )}
              </div>
              <div className="text-yellow-500 text-sm mt-1">
                {"★".repeat(Math.floor(item.rating)) +
                  (item.rating % 1 ? "☆" : "")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
