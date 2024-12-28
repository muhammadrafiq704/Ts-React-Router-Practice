import React, { useState } from "react";
import { SidebarLogo, SideBarWrapper, SidebarChild } from "./ui";
import SidebarData from "./SidebarData";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar: React.FC = () => {
  const [chevOpen, setChevOpen] = useState<number | null>(null);

  // const handleClickArrow = (id: number) => {
  //   setChevOpen((prev) => (prev === id ? null : id));
  // };
  console.log("chevOpen", chevOpen);
  return (
    <SideBarWrapper>
      <SidebarLogo>
        <img
          style={{ mixBlendMode: "color-burn" }}
          src="/img.webp"
          alt="vite logo"
        />
      </SidebarLogo>
      {SidebarData.map((item) => {
        return (
          <>
            <SidebarChild to={item.path} key={item.id}>
              <div>
              <item.icon style={{ fontSize: 24, marginRight: "8px" }} />

              <p
                onClick={() =>
                  setChevOpen((prev) => (prev === item.id ? null : item.id))
                }
                >
                {item.title}
              </p>
                </div>
              <div style={{ display: 'flex', alignItems:'end'  }}>
                {chevOpen === item.id ? <IoIosArrowDown /> : <MdKeyboardArrowRight />}
              </div>
            </SidebarChild>
          </>
        );
      })}
    </SideBarWrapper>
  );
};

export default Sidebar;
