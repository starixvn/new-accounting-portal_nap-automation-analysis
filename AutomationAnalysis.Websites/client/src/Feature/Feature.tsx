import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import ReportPage from "./Report/ReportPage";
import Login from "./Login/Login";
import Layout from "../Layout/Layout";
function Home() {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={HomePage} />
        <Route exact path={`${match.url}/report`} component={ReportPage} />
        <Route exact path={`${match.url}/login`} component={Login} />
      </Switch>
    </Layout>
  );
}

export default Home;
