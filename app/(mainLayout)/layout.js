import Navbar from "@/Components/shared/navbar/Navbar";
import React from "react";

export const metadata = {
  title: "Al-malaki | Home",
  description: "Generated by create next app",
};
const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
