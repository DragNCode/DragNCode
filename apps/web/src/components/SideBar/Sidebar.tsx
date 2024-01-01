// Sidebar.js
import React from "react";
import elementImage from "@/images/elements.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div
      className="rounded-sm h-full w-20"
      style={{ backgroundColor: "#323232" }}
    >
        <Image src={elementImage} alt="Elements" className="border ml-2 h-16 w-16 mt-4" ></Image>
    </div>
  );
};
 
export default Sidebar;
