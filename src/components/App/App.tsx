import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MainLayout } from "@layouts/MainLayout";

import { HOME } from "@constants/url";

const HomePage = lazy(() => import("@routes/HomePage"));

export const App = memo(() => (
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={null}>
        <Switch>
          <Route exact component={HomePage} path={HOME} />
        </Switch>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
));
