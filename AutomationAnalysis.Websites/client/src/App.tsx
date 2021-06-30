import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feature from "./Feature/Feature";
function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Switch>
          <Route component={Feature} path="/app" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
