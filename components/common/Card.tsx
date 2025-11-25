import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { FaStar, FaBath } from "react-icons/fa";
import { IoBed, IoPeople } from "react-icons/io5";

const Card = ({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
}: PropertyProps) => {
  return (
    <div className="flex flex-col space-y-3">
      <div>
        <Image
          src={image}
          alt="name"
          width={379}
          height={255}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex items-center space-x-4  p-2">
        {category.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-ring/20 px-2 py-1 rounded-2xl text-sm"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-ring">
            {address.state}, {address.city}, {address.country}
          </p>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <FaStar color="gold" />
          <p>{rating}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="border p-2 rounded-4xl">
          <p className="flex items-center justify-between gap-2">
            <IoBed /> <span>{offers.bed}</span> <FaBath /> {offers.shower}
            <IoPeople /> {offers.occupants}
          </p>
        </div>
        <div>
          <span className="font-semibold text-lg">${price}/n</span>
        </div>
      </div>

    </div>
  );
};

export default Card;
