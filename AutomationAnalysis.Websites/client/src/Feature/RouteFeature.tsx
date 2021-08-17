import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import ReportPage from './ISNOdds/ISNOddsPage';
import RedirectToLogin from './RedirectToLogin/RedirectToLogin';
import Layout from '../Layout/Layout';
import NotFoundPage from '../Layout/NotFoundPage/NotFoundPage';

function Feature() {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={HomePage} />
        <Route exact path={`${match.url}/isn-odds-data`} component={ReportPage} />
        <Route exact path={`${match.url}/redirect-login`} component={RedirectToLogin} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}

export default Feature;
