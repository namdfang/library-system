import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.scss";

export default function MainLayout(props) {
  const { children } = props;
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  function handleShowSidebar(value) {
    setIsShowSidebar(value);
  }

  return (
    <div>
      <Navbar onShow={handleShowSidebar} className="header" />
      <div className="wrapper d-flex">
        <Sidebar isShowSidebar={isShowSidebar} />
        <div className={isShowSidebar ? "main-content active" : "main-content"}>
          {children}
        </div>
      </div>
    </div>
  );
}
