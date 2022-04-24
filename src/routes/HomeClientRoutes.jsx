import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/path";

const HomeClient = lazy(() => import("../pages/HomeClient/HomeClient"));

export default function HomeClientRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <HomeClient />
          </Suspense>
        )}
      />
    </Switch>
  );
}
