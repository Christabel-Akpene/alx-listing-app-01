import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { Separator } from "../ui/separator";
const Header = () => {
  return (
    
    <>
        <div>
      {/* // Mobile view */}

      <div className="flex justify-between items-center p-6 sm:p-0">
        <div className="border flex items-center p-2 rounded-4xl space-x-4 sm:hidden">
          <div className="flex flex-col pl-4">
            <p className="font-semibold text-sm">Where to</p>
            <p className="text-sm text-ring flex items-center">
              <span>Location</span>
              <span>
                <LuDot />
              </span>
              <span>Date</span>
              <span>
                <LuDot />
              </span>
              <span>Add guest</span>
            </p>
          </div>
          <div className="bg-accent flex items-center justify-center rounded-full p-3">
            <CiSearch />
          </div>
        </div>
        <div className="border border-primary-green rounded-full sm:hidden">
          <FaUserCircle color="green" size={38} />
        </div>
      </div>

      {/* // & Desktop Tablet View */}

      <div className="hidden sm:flex justify-between items-center px-6 py-4 lg:px-12">
        <div>
          <Image src={"/assets/Vector.png"} alt="Logo" width={50} height={50} />
        </div>
        <div className="border flex items-center p-2 rounded-4xl space-x-4 lg:space-x-8">
          <div className="flex flex-col pl-4 lg:pr-20">
            <p className="font-semibold text-sm">Location</p>
            <p className="text-sm text-ring ">Search for a location</p>
          </div>
          <div className="flex flex-col pl-4">
            <p className="font-semibold text-sm">Check In</p>
            <p className="text-sm text-ring ">Add date</p>
          </div>

          <div className="flex flex-col pl-4">
            <p className="font-semibold text-sm">Check out</p>
            <p className="text-sm text-ring ">Add date</p>
          </div>
          <div className="flex flex-col pl-4">
            <p className="font-semibold text-sm">People</p>
            <p className="text-sm text-ring ">Add guest</p>
          </div>
          <div className="bg-accent flex items-center justify-center rounded-full p-3">
            <CiSearch />
          </div>
        </div>
        <div className="border border-primary-green rounded-full lg:hidden">
          <FaUserCircle color="green" size={38} />
        </div>
        <div className="hidden lg:block space-x-4">
          <button className="bg-primary-green text-white rounded-3xl px-6 py-2 cursor-pointer">
            Sign in
          </button>
          <button className="border rounded-3xl px-6 py-2 cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </div>
    <Separator/>
    </>

  );
};

export default Header;
