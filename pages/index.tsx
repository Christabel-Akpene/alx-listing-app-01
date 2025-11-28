"use client";

import Card from "@/components/common/Card";
import HouseType from "@/components/common/HouseType";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleItems, setVisibleItems] = useState(8);
  const [data, setData] = useState(PROPERTYLISTINGSAMPLE);
  const [filteredData, setFilteredData] = useState(PROPERTYLISTINGSAMPLE);
  const [filter, setFilter] = useState("all");


  const handleFilter = (filter:string) => {
    setFilter(filter)
    if (filter === "all"){
      setFilteredData(data);
    }

    else if (filter === "checkin"){
      const filtered = data.filter((item) => {
        return (item.category.includes("Self Checkin"))
      })
      setFilteredData(filtered)
    }
    else if (filter === "beach"){
      const filtered = data.filter((item) => {
        return (item.category.includes("Beachfront"))
      })
      setFilteredData(filtered)
    }
    else if (filter === "mountain"){
      const filtered = data.filter((item) => {
        return (item.category.includes("Mountain View"))
      })
      setFilteredData(filtered)
    }
    else if (filter === "wifi"){
      const filtered = data.filter((item) => {
        return (item.category.includes("Free WiFi"))
      })
      setFilteredData(filtered)
    }
  }


  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 4);
  };


  return (
    <>
      <HouseType/>
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

            {/* //Filter Buttons */}

      <div className="flex space-x-4 mt-8 overflow-auto no-scrollbar">
        <button onClick={()=>handleFilter("all")} className={`border px-3 py-1 hover:bg-green-100 transition-colors rounded-2xl cursor-pointe whitespace-nowrap ${filter === "all" ? "border-green-700 bg-green-100" : ""}`}>All</button>
        <button onClick={()=>handleFilter("checkin")} className={`border px-3 py-1 hover:bg-green-100 transition-colors rounded-2xl cursor-pointe whitespace-nowrap ${filter === "checkin" ? "border-green-700 bg-green-100" : ""}`}>Self Checkin</button>
        <button onClick={()=>handleFilter("beach")} className={`border px-3 py-1 hover:bg-green-100 transition-colors rounded-2xl cursor-pointe whitespace-nowrap ${filter === "beach" ? "border-green-700 bg-green-100" : ""}`}>Beach Front</button>
        <button onClick={()=>handleFilter("wifi")} className={`border px-3 py-1 hover:bg-green-100 transition-colors rounded-2xl cursor-pointe whitespace-nowrap ${filter === "wifi" ? "border-green-700 bg-green-100" : ""}`}>Free WiFi</button>
        <button onClick={()=>handleFilter("mountain")} className={`border px-3 py-1 hover:bg-green-100 transition-colors rounded-2xl cursor-pointe whitespace-nowrap ${filter === "mountain" ? "border-green-700 bg-green-100" : ""}`}>Mountain View</button>
      </div>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredData.slice(0, visibleItems).map(
          (
            { name, address, rating, category, price, offers, image, discount },
            index
          ) => {
            return (
              <Link href={`/property/${index}`} key={name}>
                <Card
                  name={name}
                  address={address}
                  rating={rating}
                  category={category}
                  price={price}
                  offers={offers}
                  image={image}
                  discount={discount}
                />
              </Link>
            );
          }
        )}
      </div>



      {visibleItems < filteredData.length && (
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
    </>

  );
}
