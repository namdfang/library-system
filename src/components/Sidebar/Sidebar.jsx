import React from "react";
import SidebarMenu from "./Sidebar.menu";
import "./Sidebar.scss";

function Sidebar(props) {
  const { isShowSidebar } = props;
  return (
    <>
      <nav className={isShowSidebar ? "side-bar active" : "side-bar"}>
        <ul className="side-bar-items w-100">
          <SidebarMenu isShowSidebar={isShowSidebar} />
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
