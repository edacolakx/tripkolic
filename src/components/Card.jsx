import { CiHeart } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

function Card(prop) {
  return (
    <div className="flex w-[85%] rounded-xl flex-col shadow-2xl ml-8">
      <div className="relative w-full h-64">
        <div className="absolute top-4 right-4 bg-white bg-opacity-50 text-white p-2 rounded-lg">
          <CiHeart color="black" size={30} />
        </div>
        <img
          src={prop.image}
          alt="Island"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-4 left-4 bg-[#F2A945] bg-opacity-50 text-white p-2 rounded-lg">
          {prop.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <IoMdStar color="#F2A945" size={24} />
            <p className="font-light">{prop.rating}</p>
          </div>
          <div className="flex flex-row">
            <MdOutlineLocationOn color="#F2A945" size={24} />
            <p className="truncate w-60">{prop.location}</p>
          </div>
        </div>
        <p className="font-bold text-3xl mt-3">{prop.tourname}</p>
        <p className="flex justify-end text-xl mt-6 font-semibold">
          {prop.price} TL
        </p>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-row underline text-[#F2A945]">
            <a href="">Details </a>
            <HiOutlineArrowNarrowRight size={24} className="mt-0.5 " />
          </div>
          <button className="bg-[#F2A945] p-2 rounded-xl text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
