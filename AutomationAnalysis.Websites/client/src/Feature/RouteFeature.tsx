import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import ReportPage from './Report/ReportPage';
import RedirectToLogin from './RedirectToLogin/RedirectToLogin';
import Layout from '../Layout/Layout';

function Feature() {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={HomePage} />
        <Route exact path={`${match.url}/isn-odds-data`} component={ReportPage} />
        <Route exact path={`${match.url}/redirect-login`} component={RedirectToLogin} />
      </Switch>
    </Layout>
  );
}

export default Feature;
