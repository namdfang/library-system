import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/path";
const Login = lazy(() => import("../pages/Login/Login"));

export default function LoginRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.LOGIN}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        )}
      />
    </Switch>
  );
}
