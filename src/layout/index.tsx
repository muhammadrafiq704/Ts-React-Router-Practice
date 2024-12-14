import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutChilContainer, LayoutContainer } from "./ui";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutChilContainer>
        <Outlet />
      </LayoutChilContainer>
    </LayoutContainer>
  );
};

export default Layout;
