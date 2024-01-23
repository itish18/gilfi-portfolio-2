import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="flex bg-black items-center justify-between w-full py-8 px-24 text-white">
      <div className="text-white text-4xl">Logo</div>
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-14 text-2xl font-thinest">
          <span>CONTACT</span>
          <span>ABOUT</span>
        </div>
        <div className="flex items-center gap-12">
          <LuInstagram color="white" size={28} />
          <FaTwitter color="white" size={28} />
        </div>
      </div>
    </div>
  );
};
