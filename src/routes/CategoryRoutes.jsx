import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/path";

const Category = lazy(() => import("../pages/Category/Category"));

export default function CategoryRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.CATEGORY}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Category />
          </Suspense>
        )}
      />
    </Switch>
  );
}
