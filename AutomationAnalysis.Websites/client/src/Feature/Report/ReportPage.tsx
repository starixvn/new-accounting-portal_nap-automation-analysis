import { useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import HeaderForGoal from './GridView/HeaderForGoal';
import { ApplicationState } from '../../configureStore';
import HeaderForRedCard from './GridView/HeaderForRedCard';
import './ReportPage.css';

function ReportPage() {
  const { reports, reportOption } = useSelector((state: ApplicationState) => state.report);

  const head = reportOption === 'Goal' ? <HeaderForGoal /> : <HeaderForRedCard />;

  const body = reports.map((report) => (
    <tr key={`${report.From}-${report.To}`}>
      <td>{report.From}</td>
      <td>{report.To}</td>
      <td>{report.NumberOfLeague}</td>
      <td>{report.NumberOfMatch}</td>
      <td>{report.BeforeHDP}</td>
      <td>{report.BeforeOU}</td>
      <td>{report.AfterHDP}</td>
      <td>{report.AfterOU}</td>
      <td>{report.DiffHDP}</td>
      <td>{report.DiffOU}</td>
    </tr>
  ));
  return (
    <div className="report-container">
      <Filter />
      {!!reports?.length && <GridView head={head} body={body} />}
    </div>
  );
}

export default ReportPage;
