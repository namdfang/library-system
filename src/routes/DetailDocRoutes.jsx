import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/path";

const DetailDoc = lazy(() => import("../pages/DetailDoc/DetailDoc"));

export default function HomeClientRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.DETAIL_DOC}
        component={() => (
          <Suspense fallback={<Loading />}>
            <DetailDoc />
          </Suspense>
        )}
      />
    </Switch>
  );
}
