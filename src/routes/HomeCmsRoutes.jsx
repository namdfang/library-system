import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/path";

const HomeCms = lazy(() => import("../pages/HomeCms/HomeCms"));

export default function HomeCmsRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.DOCUMENT}
        component={() => (
          <Suspense fallback={<Loading />}>
            <HomeCms />
          </Suspense>
        )}
      />
    </Switch>
  );
}
