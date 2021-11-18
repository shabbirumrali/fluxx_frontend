import React, { Suspense, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";
import SetAuthToken from '../setAuthToken';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute'; 
import { lazy } from "react";
const Members = lazy(() => import("../containers/Members"));
const CharterLanding = lazy(() => import("../containers/Members/charterlanding"));
const Setting = lazy(() => import("../containers/Setting/Setting"));
const Memberdetail = lazy(() => import("../containers/Members/Memberdetail"));
const AdminPage  = lazy(() => import("../containers/Admin/adminPage"));
const CharterMain = lazy(() => import("../containers/Members/chartermain"));
const FinalView = lazy(() => import("../containers/Members/finalLview"));
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Content = ({toggle}) => {

  const isAuthenticated =  SetAuthToken();
  const allRouter = routes.map((route, i) => {

    console.log(route);
    return (
      route.component && (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <div>
              <route.component  {...props} toggle={toggle}  />
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
          <PrivateRoute
            path="/members"
            isAuthenticated={isAuthenticated}
          >
           <Members />
          </PrivateRoute>
          <PrivateRoute
            path="/setting"
            isAuthenticated={isAuthenticated}
          >
            <Setting />
          </PrivateRoute>
          <PrivateRoute
            path="/members/:memberid"
            isAuthenticated={isAuthenticated}
          >
            <Memberdetail />
          </PrivateRoute>

          <PrivateRoute
            path="/admin"
            isAuthenticated={isAuthenticated}
          >
           <AdminPage />
          </PrivateRoute>
          <PrivateRoute
            path="/cmain"
            isAuthenticated={isAuthenticated}
          >
           <CharterMain />

          </PrivateRoute>


          <PrivateRoute
            path="/clanding"
            isAuthenticated={isAuthenticated}
          >
           <CharterLanding />


          </PrivateRoute>

          <PrivateRoute
            path="/finalStep"
            isAuthenticated={isAuthenticated}
          >
           <FinalView />


          </PrivateRoute>
          

          


          <Redirect from="/" to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default memo(Content);
