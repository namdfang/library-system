import React from "react";

export default function Title(props) {
  const { title, iconRight } = props;
  return (
    <div className="title-and-icon d-flex align-items-center justify-content-between">
      <div>{title}</div>
      {iconRight}
    </div>
  );
}
