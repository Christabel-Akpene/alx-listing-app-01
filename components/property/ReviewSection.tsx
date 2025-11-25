import { ReviewProps } from "@/interfaces";
import { Dot } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({ image, name, yearsOnALX, date, tripType, review}: ReviewProps) => {
  return (
    <div className="flex flex-col gap-3">
        <div className="flex items-center">
            <div className="rounded-full">
                <Image src={image} alt={name} width={500} height={500} className="w-12 h-12 rounded-full mr-4 object-cover"/>
            </div>
            <div className="flex flex-col ">
                <p className="font-semibold">{name}</p>
                <p className="text-ring">{yearsOnALX} years on ALX</p>
            </div>
        </div>
        <div className="flex space-x-2 items-center">
            <span className="font-semibold">{date}</span>
            <span><Dot/></span>
            <span className="text-ring">{tripType}</span>
        </div>
        <div>
            <p>{review}</p>
        </div>

    </div>
  );
};

export default ReviewCard;