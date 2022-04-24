import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/all";
import RightNavbar from "./RightNavbar";
import LOGO from "../../assets/images/logo.png";
import "./Navbar.scss";

export default function Navbar(props) {
  const { onShow } = props;
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [admin, setAdmin] = useState(true);

  function showSidebarAndAdmin() {
    setAdmin(!admin);
    setIsShowSidebar(!isShowSidebar);
    onShow(!isShowSidebar);
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="header sticky-top bg-white p-0 ">
        <div className="left-side d-flex align-items-center ">
          <div className={!admin ? "inactive" : "logo"}>
            <img src={LOGO} alt="document logo" className="logo-document" />
            <h2>Squad3</h2>
          </div>
          <div>
            <button
              onClick={() => {
                showSidebarAndAdmin();
              }}
              className="menu-bars"
            >
              <FaBars className="icon-bar" />
            </button>
          </div>
        </div>
        <RightNavbar></RightNavbar>
      </div>
    </IconContext.Provider>
  );
}
