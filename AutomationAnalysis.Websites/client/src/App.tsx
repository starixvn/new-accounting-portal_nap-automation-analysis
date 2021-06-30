import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Feature/Home/Home";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
