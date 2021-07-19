import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Feature from './Feature/RouteFeature';

function App() {
  return (
    <>
      <ToastContainer
        hideProgressBar
        position="bottom-right"
        autoClose={3000}
      />
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Switch>
            <Route component={Feature} path="/app" />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
