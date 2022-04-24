import React from "react";
import { BrowserRouter } from "react-router-dom";
import CategoryRoutes from "./CategoryRoutes";
import HomeCmsRoutes from "./HomeCmsRoutes";
import LoginRoutes from "./LoginRoutes";
import RegisterRoutes from "./RegisterRoutes";
import HomeClientRoutes from "./HomeClientRoutes";
import DetailDoc from "./DetailDocRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeCmsRoutes />
      <HomeClientRoutes />
      <DetailDoc />
      <LoginRoutes />
      <RegisterRoutes />
      <CategoryRoutes />
    </BrowserRouter>
  );
}
