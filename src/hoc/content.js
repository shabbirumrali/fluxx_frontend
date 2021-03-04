import React, { Suspense, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Content = () => {
  const allRouter = routes.map((route, i) => {
    return (
      route.component && (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <div>
              <route.component {...props} />
            </div>
          )}
        />
      )
    );
  });
  return (
    <>
      <Suspense fallback={loading}>
        <Switch>
          {allRouter}
          <Redirect from="/" to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default memo(Content);
