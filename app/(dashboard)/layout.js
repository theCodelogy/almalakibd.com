import Header from "@/Components/dashboard/Header";
import Sidebar from "@/Components/dashboard/sidebar/Sidebar";
import React from "react";

const page = ({ children }) => {
  return (
    <main className="flex gap-2 m-0 p-0">
      <Sidebar />
      <Header />
      {/* <section className="p-2 flex">
        <Sidebar />
        <Header />
      </section>
      <section>{children}</section> */}
    </main>
  );
};

export default page;
