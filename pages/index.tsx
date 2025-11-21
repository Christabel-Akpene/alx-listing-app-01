"use client";

import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <div className="px-6 lg:px-12 ">
      <div className="h-60 text-white lg:h-92 rounded-4xl overflow-hidden">
        <div className="bg-[url(/assets/background.png)] bg-no-repeat bg-center bg-cover h-full">
          <div className="flex items-center justify-center flex-col h-full px-4 text-center">
            <p className="font-semibold text-3xl md:text-5xl">
              Find your favorite place here!
            </p>
            <p className="text-center text-sm lg:text-base py-3">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROPERTYLISTINGSAMPLE.slice(0, visibleItems).map(
          ({
            name,
            address,
            rating,
            category,
            price,
            offers,
            image,
            discount,
          }) => {
            return (
              <Card
                key={name}
                name={name}
                address={address}
                rating={rating}
                category={category}
                price={price}
                offers={offers}
                image={image}
                discount={discount}
              />
            );
          }
        )}
      </div>

      {visibleItems < PROPERTYLISTINGSAMPLE.length && (
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-black text-white mx-auto text-center rounded-4xl cursor-pointer"
          >
            Show more
          </button>
          <p>Click to see more listings</p>
        </div>
      )}
    </div>
  );
}
