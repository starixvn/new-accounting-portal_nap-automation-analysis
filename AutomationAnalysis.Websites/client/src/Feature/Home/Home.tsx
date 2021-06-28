import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Layout from "../../Layout/Layout";
function Home() {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={HomePage} />
      </Switch>
    </Layout>
  );
}

export default Home;
