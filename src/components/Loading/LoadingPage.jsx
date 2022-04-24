import React from "react";
import { VscLoading } from "react-icons/all";
import "./LoadingPage.scss";

export default function LoadingPage() {
  return (
    <div className="text-center loader my-2">
      <div className="spin-loading">
        <VscLoading className="text-primary loader-icon" />
      </div>
    </div>
  );
}
