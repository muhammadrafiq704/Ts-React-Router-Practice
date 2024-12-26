import React from "react";
import {
  SidebarLogo,
  SideBarWrapper,
  SidebarChild,
} from "./ui";
import SidebarData from "./SidebarData";

const Sidebar: React.FC = () => {
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
                  <p>{item.title}</p>

                </SidebarChild>
              </>
            );
          })}
    </SideBarWrapper>
  );
};

export default Sidebar;
