import Spinner from '../Images/spinner.gif';
import './index.css';

const PageLoading = () => {
  return (
    <div className="fp-container">
      <img src={Spinner} className="fp-loader" alt="loading" />
    </div>
  );
};

export default PageLoading;
