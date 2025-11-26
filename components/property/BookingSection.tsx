import { useState } from "react";
import { Separator } from "../ui/separator";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  
  const [checkIn, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");

  const bookedDays = (checkIn:string, checkout:string) => {
      if (checkIn && checkout){
        const check_out = new Date(checkout);
        const check_in = new Date(checkIn);

        const diffDays = (check_out.getTime() - check_in.getTime())/(1000 * 60 * 60 * 24);        
        return diffDays
      }
      return 0;
  }

  const days = bookedDays(checkIn, checkout); 
  

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label className="semibold">Check-in</label>
        <input onChange={(e)=> setCheckIn(e.target.value)} value={checkIn}  type="date"  className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label className="semibold">Check-out</label>
        <input onChange={(e)=> setCheckOut(e.target.value)} value={checkout} type="date" className="border p-2 w-full mt-2" />
      </div>

      {
        days > 0 && (
          <div className="my-4 flex flex-col space-y-2">
            <div className="flex justify-between">
              <p className="text-ring text-sm">${price} * {days} nights</p>
              <p className="font-semibold">${(price * days)}</p>
            </div>
            <div className="flex justify-between">
              <p  className="text-ring text-sm ">Weekly discounts</p>
              <p className="font-semibold">-$88</p>
            </div>
            <div className="flex justify-between mb-4">
              <p  className="text-ring text-sm">Service fee</p>
              <p className="font-semibold">${33}</p>
            </div>
            <Separator/>
            <div className="flex justify-between">
              <p  className="text-ring text-sm">Total Payment</p>
              <p className="text-green-700 font-semibold">${(price * days) - 88 + 33}</p>
            </div>
          </div>
        )
      }


      {/* Reserve button */}
      <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-md w-full">Reserve now</button>
    </div>
  );
};

export default BookingSection;