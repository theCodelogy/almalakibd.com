import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAddToPhotos, MdAssignmentAdd } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { FaPeopleCarryBox } from "react-icons/fa6";
import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    icon: <MdOutlineSpaceDashboard className="text-xl" />,
  },
  {
    title: "Products",
    icon: <BsBoxSeam className="text-xl" />,
    subLinks: [
      {
        title: "Add Product",
        icon: <MdOutlineAddToPhotos className="text-xl" />,
      },
      {
        title: "Add Product",
        icon: <MdAssignmentAdd className="text-xl" />,
      },
    ],
  },
  {
    title: "Customers",
    icon: <LuUsers2 className="text-xl" />,
  },
  {
    title: "Suppliers",
    icon: <FaPeopleCarryBox className="text-xl" />,
  },
];
const SidebarLinks = () => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => (
        <li key={index}>
          <Link
            onClick={() => {
              setSubLinks(!subLinks);
            }}
            href={"#"}
            className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
          >
            {menuItem.icon}
            <h2 className="text-lg flex-1">{menuItem.title}</h2>
            {menuItem.subLinks && (
              <IoIosArrowDown
                className={`${
                  subLinks
                    ? "rotate-180 transition-all duration-200"
                    : "transition-all duration-200"
                }`}
              />
            )}
          </Link>
          {menuItem.subLinks && (
            <ul
              className={` ${
                subLinks
                  ? "block transition-all duration-200"
                  : "hidden transition-all duration-200"
              }`}
            >
              {menuItem.subLinks.map((subLink, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={"#"}
                    className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
                  >
                    {subLink.icon}
                    <p className="text-lg flex-1">{subLink.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
