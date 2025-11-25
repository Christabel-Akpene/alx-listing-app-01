import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import { FaStar, FaRegUserCircle, FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { IoBed, IoPeople } from "react-icons/io5";
import Link from "next/link";
import BookingSection from "./BookingSection";
import { Separator } from "../ui/separator";
import { REVIEWS } from "@/constants";
import ReviewCard from "./ReviewSection";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({property}) => {
    const [active, setActive] = useState("description");

  return (
    <div className=" mx-auto p-6 lg:px-12">
      <div className="flex flex-col sm:flex-col-reverse">
        <div className="p-0 sm:hidden">
          <Image
            src={property.image}
            alt={property.name}
            width={500}
            height={500}
            className="w-full p-0  object-cover"
          />
        </div>

        <div className="hidden sm:block ">
          <div className="grid grid-cols-4 grid-rows-2 rounded-lg overflow-hidden gap-2 h-[430px]">
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={200}
              className="col-span-2 row-span-2 w-full h-full object-cover rounded-l-lg"
            />
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={200}
              className="col-span-2 row-span-1 w-full h-full object-cover rounded-tr-lg"
            />
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={200}
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-bl-lg"
            />
            <Image
              src={property.image}
              alt={property.name}
              width={400}
              height={200}
              className="col-span-1 row-span-1 w-full h-full object-cover rounded-br-lg"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 mt-4 sm:mb-4 sm:mt-0 md:lg">
            <p className="font-bold text-2xl md:text-3xl ">{property.name}</p>
            <div className="flex space-x-3 text-ring">
              <p className="flex items-center gap-2">
                <FaStar color="gold" /> <span>{property.rating}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot />
                <span>
                  {property.address.city}, {property.address.country}
                </span>{" "}
              </p>
              <p className="flex items-center gap-2">
                <FaRegUserCircle /> <span>Hurray</span>
              </p>
            </div>
          </div>

          <div className="hidden sm:block">
            <button className="border rounded-3xl px-6 py-2 cursor-pointer mr-4 hover:bg-gray-50">
              <p className="flex items-center gap-2">
                <CiHeart /> <span>Save</span>
              </p>
            </button>
            <button className="border rounded-3xl px-6 py-2 cursor-pointer hover:bg-gray-50">
              <p className="flex items-center gap-2">
                <GoShare /> <span>Share</span>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4 text-sm">
        <button className="border rounded-3xl px-6 py-2 cursor-pointer hover:bg-gray-50 ">
          <p className="flex items-center gap-2">
            <IoBed />
            <span className="flex gap-1">
              {property.offers.bed}
              <span className="hidden sm:block">bedrooms</span>
            </span>
          </p>
        </button>
        <button className="border rounded-3xl px-6 py-2 cursor-pointer hover:bg-gray-50">
          <p className="flex items-center gap-2">
            <FaBath />
            <span className="flex gap-1">
              {property.offers.shower}
              <span className="hidden sm:block">bathrooms</span>
            </span>
          </p>
        </button>
        <button className="border rounded-3xl px-6 py-2 cursor-pointer hover:bg-gray-50">
          <p className="flex items-center gap-2">
            <IoPeople />
            <span className="flex gap-1">
              {property.offers.occupants}
              <span className="hidden sm:block">guests</span>
            </span>
          </p>
        </button>
      </div>

      {/* //About */}
      <div className="flex justify-between my-8 space-x-8">
        <div className="flex-2/3">
          <div className="flex justify-between">
            
              <ul className="flex space-x-8 my-2">
                <li>
                  <Link href="#description" className={"text-green-700" }>Description</Link>
                </li>
                <li>
                  <Link href="#offer" >What we offer</Link>
                </li>
                <li>
                  <Link href="#reviews">Reviews</Link>
                </li>
              </ul>
            
            <div className="hidden lg:block">
                <p>Published July 11, 2024</p>
            </div>
          </div>
          <Separator />
          <div id="description" className="my-4 sm:my-8 lg:w-[80%]">
            <p>{property.description}</p>

          </div>
          <Separator />

          <div id="offer" className="my-8 ">
            <p className="font-bold my-2 text-lg" >What this place offer</p>
            <p>
              Each home is fully equipped to meet your needs, with ample space
              and privacy
            </p>
            <div className="grid grid-cols-1">
              {property.category.map((item, index) => {
                return (
                  <p key={index} className="flex items-center gap-3">
                    <CiHeart /> <span>{item}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <Separator />
          <div id="reviews">
            <p className="flex items-center mt-8 gap-3 mb-4">
              <FaStar color="gold" />
              <span className="font-bold">{property.rating}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REVIEWS.map(
                ({ image, name, yearsOnALX, date, tripType, review }) => {
                  return (
                    <ReviewCard
                      key={name}
                      image={image}
                      name={name}
                      yearsOnALX={yearsOnALX}
                      date={date}
                      tripType={tripType}
                      review={review}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="hidden sm:block flex-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
