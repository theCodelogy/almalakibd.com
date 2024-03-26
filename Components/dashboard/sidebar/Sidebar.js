// "use client";
// import Image from "next/image";
// import img from "../../../public/al-malaki.png";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
// import { BsBoxSeam } from "react-icons/bs";
// import { MdAssignmentAdd } from "react-icons/md";
// import { LuUsers2 } from "react-icons/lu";
// import { useState } from "react";
// import { MdOutlineAddToPhotos } from "react-icons/md";
// import { FaPeopleCarryBox } from "react-icons/fa6";

// const Sidebar = () => {
//   const [subLinks, setSubLInks] = useState(false);

//   return (
//     <aside className="w-[20%] h-screen bg-gray-100 rounded-t-lg overflow-hidden">
//       <div className="flex items-center justify-center p-1 bg-gray-200 rounded-lg ">
//         <Image className="" src={img} width={100} alt="Logo" />
//         <h2 className="text-lg font-semibold">Al Malaki</h2>
//       </div>
//       <nav className="p-3">
//         <ul>
//           <li>
//             <Link
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <MdOutlineSpaceDashboard className="text-xl" />
//               <p className="text-lg">Dashboard</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={() => {
//                 setSubLInks(!subLinks);
//               }}
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <BsBoxSeam className="text-xl" />
//               <h2 className="text-lg flex-1">Products</h2>
//               <IoIosArrowDown
//                 className={`${
//                   subLinks
//                     ? "rotate-180 transition-all duration-200"
//                     : "transition-all duration-200"
//                 }`}
//               />
//             </Link>
//             <ul
//               className={` ${
//                 subLinks
//                   ? "block transition-all duration-200"
//                   : "hidden transition-all duration-200"
//               }`}
//             >
//               <li className="transition-all duration-200">
//                 <Link
//                   href={"#"}
//                   className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
//                 >
//                   <MdOutlineAddToPhotos className="text-xl" />
//                   <p className="text-lg flex-1">Add Product</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={"#"}
//                   className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
//                 >
//                   <MdAssignmentAdd className="text-xl" />
//                   <p className="text-lg flex-1">Add Product</p>
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <LuUsers2 className="text-xl" />
//               <p className="text-lg">Coustemrs</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <FaPeopleCarryBox className="text-xl" />
//               <p className="text-lg">Suppliers</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <LuUsers2 className="text-xl" />
//               <p className="text-lg">Coustemrs</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={() => {
//                 setSubLInks(!subLinks);
//               }}
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <BsBoxSeam className="text-xl" />
//               <h2 className="text-lg flex-1">Products</h2>
//               <IoIosArrowDown
//                 className={`${
//                   subLinks
//                     ? "rotate-180 transition-all duration-200"
//                     : "transition-all duration-200"
//                 }`}
//               />
//             </Link>
//             <ul
//               className={` ${
//                 subLinks
//                   ? "block transition-all duration-200"
//                   : "hidden transition-all duration-200"
//               }`}
//             >
//               <li className="transition-all duration-200">
//                 <Link
//                   href={"#"}
//                   className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
//                 >
//                   <MdOutlineAddToPhotos className="text-xl" />
//                   <p className="text-lg flex-1">Add Product</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={"#"}
//                   className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
//                 >
//                   <MdAssignmentAdd className="text-xl" />
//                   <p className="text-lg flex-1">Add Product</p>
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link
//               onClick={() => {
//                 setSubLInks(!subLinks);
//               }}
//               href={"#"}
//               className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold"
//             >
//               <BsBoxSeam className="text-xl" />
//               <h2 className="text-lg flex-1">Purchases</h2>
//               <IoIosArrowDown
//                 className={`${
//                   subLinks
//                     ? "rotate-180 transition-all duration-200"
//                     : "transition-all duration-200"
//                 }`}
//               />
//             </Link>
//             <ul
//               className={` ${
//                 subLinks
//                   ? "block transition-all duration-200"
//                   : "hidden transition-all duration-200"
//               }`}
//             >
//               <li className="transition-all duration-200">
//                 <Link
//                   href={"#"}
//                   className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
//                 >
//                   <MdOutlineAddToPhotos className="text-xl" />
//                   <p className="text-lg flex-1">Add Product</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={"#"}
//                   className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-in text-gray-600 hover:text-gray-800 font-semibold pl-8"
//                 >
//                   <MdAssignmentAdd className="text-xl" />
//                   <p className="text-lg flex-1">Add Product</p>
//                 </Link>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-[20%] h-screen bg-gray-100 rounded-t-lg overflow-hidden"></aside>
  );
};

export default Sidebar;
