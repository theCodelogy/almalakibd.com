import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import img from "../../public/user.png";

const Header = () => {
  return (
    <div className="bg-gray-100 h-16 flex items-center justify-end gap-4 rounded-lg p-3 w-full">
      <div className="bg-white flex items-center gap-1 p-1 rounded-lg">
        <FiSearch className="text-xl ml-1" />
        <input className="p-2" placeholder="Search here..." />
      </div>
      <div className="h-10 w-10 rounded-full overflow-hidden object-cover">
        <Image src={img} alt="user" />
      </div>
    </div>
  );
};

export default Header;
