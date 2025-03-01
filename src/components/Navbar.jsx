import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCart, IoPersonCircle } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center z-50 fixed top-2 left-2 w-full justify-evenly flex-row">
        <div className="mt-6">
          <img src="/src/assets/logo.png" alt="" className="h-14" />
        </div>
        <div className=" bg-[#F2A945]  w-[90%] mt-8 rounded-xl p-3 flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <GiHamburgerMenu
              color="white"
              size={24}
              onClick={() => {
                setModal(true);
                console.log("object");
              }}
            />
          </div>
          <div className="flex flex-row gap-4">
            <FaHeart color="white" size={24} />
            <IoCart color="white" size={24} />
            <p className="text-white">Eda Çolak</p>
            <IoPersonCircle color="white" size={24} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
