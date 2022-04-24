import React from "react";
import { VscLoading } from "react-icons/all";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="fs-2 text-center loading">
      <VscLoading className="text-primary loading-icon" />
      <h2 className="mt-3">Loading, please wait...</h2>
    </div>
  );
}
