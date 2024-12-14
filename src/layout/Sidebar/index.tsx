import React from "react";
import {
  SidebarLogo,
  SideBarWrapper,
  NavLinkSection,
  SidebarChild,
} from "./ui";
import { Box } from "@mui/material";
import SidebarData from "./SidebarData";

const Sidebar: React.FC = () => {
  return (
    <SideBarWrapper>
      <SidebarLogo>
        <img src="/vite.svg" alt="vite logo" />
      </SidebarLogo>
      <NavLinkSection>
        <Box>
          {SidebarData.map((item) => {
            return (
              <SidebarChild to={item.path} key={item.id}>
                <p>{item.title}</p>
              </SidebarChild>
            );
          })}
        </Box>
      </NavLinkSection>
    </SideBarWrapper>
  );
};

export default Sidebar;
