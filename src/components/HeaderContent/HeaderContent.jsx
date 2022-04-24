import React from "react";
import { AiOutlineRight } from "react-icons/all";
import "./HeaderContent.scss";

export default function HeaderContent(props) {
  const { title, iconMenu, itemMenu, iconSubMenu } = props;
  return (
    <div className="content-header bg-white py-3 rounded-3 d-flex align-items-center justify-content-between">
      <div className="title-header fw-bold">{title}</div>
      <div className="breadcrumb d-flex align-items-center">
        <div className="d-flex align-items-center">
          <div className="icon-left">{iconMenu}</div>
          <div className="title-link title-menu fw-bold">{itemMenu}</div>
        </div>
        <div className="icon-right">
          <AiOutlineRight />
        </div>
        <div className="d-flex align-items-center">
          <div className="icon-sub-menu">{iconSubMenu}</div>
          <div className="title-sub-menu">{title}</div>
        </div>
      </div>
    </div>
  );
}
