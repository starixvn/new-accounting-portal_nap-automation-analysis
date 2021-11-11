import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center">
    <h2>404 Not Found</h2>
    <div className="error-details">Sorry, an error has occured, Requested page not found!</div>
    <Link to="/app">Go Home</Link>
  </div>
);

export default NotFoundPage;
