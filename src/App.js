import React, { lazy } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import History from "./history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Work from './Work'

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const Layout = lazy(() => import("./hoc"));


function App() {

    
  const routes = (
    <Switch>
      <Route path="/" render={(props) => <Layout {...props} />} />    
      <Redirect to="/" />      
    </Switch>
  );

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <Work />
      <Router history={History}>
        <React.Suspense fallback={loading()}>{routes}</React.Suspense>        
      </Router>
    </>
  );
}

export default App;
