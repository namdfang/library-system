import React from "react";
import "./PublicLayout.scss";

export default function PublicLayout(props) {
  const { children, greeting, title, styleForm } = props;

  return (
    <div className="public-layout">
      <div className="container-fluid d-flex justify-content-center">
        <div className={`shadow-lg bg-body rounded form-public ${styleForm}`}>
          <header className="header text-center py-3">
            <p className="fs-6 mb-0">{greeting}</p>
            <h3>{title}</h3>
          </header>
          <form className="form-input">{children}</form>
        </div>
      </div>
    </div>
  );
}
