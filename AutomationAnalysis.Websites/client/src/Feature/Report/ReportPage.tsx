import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import HeaderForGoal from './GridView/HeaderForGoal';
import { ApplicationState } from '../../configureStore';
import HeaderForRedCard from './GridView/HeaderForRedCard';
import './ReportPage.css';

function ReportPage() {
  const { reports, reportOption } = useSelector((state: ApplicationState) => state.report);

  const head = reportOption === 'Goal' ? <HeaderForGoal /> : <HeaderForRedCard />;

  const handleClick = (from = '', to = '') => {
    console.log(from, to);
  };

  const body = reports?.length ? (
    reports.map((report) => (
      <tr
        key={`${report.from}-${report.to}`}
        style={{ cursor: 'pointer' }}
        onClick={() => handleClick(report.from, report.to)}
      >
        <td>{report.from}</td>
        <td>{report.to}</td>
        <td>{report.numberOfLeague}</td>
        <td>{report.numberOfMatch}</td>
        <td>{report.beforeHDP}</td>
        <td>{report.beforeOU}</td>
        <td>{report.afterHDP}</td>
        <td>{report.afterOU}</td>
        <td>{report.diffHDP}</td>
        <td>{report.diffOU}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={10}>No found data!</td>
    </tr>
  );

  return (
    <div className="report-container">
      <Filter />
      <GridView head={head} body={body} />
    </div>
  );
}

export default ReportPage;
