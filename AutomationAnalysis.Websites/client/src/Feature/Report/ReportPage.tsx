import { useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import HeaderForGoal from './GridView/HeaderForGoal';
import { ApplicationState } from '../../configureStore';
import HeaderForRedCard from './GridView/HeaderForRedCard';
import './ReportPage.css';

function ReportPage() {
  const { reports, reportOption } = useSelector((state: ApplicationState) => state.report);

  const head = reportOption === 'Score' ? <HeaderForGoal /> : <HeaderForRedCard />;

  const body = reports.map((report) => (
    <tr key={report.fromTime}>
      <td>{report.fromTime}</td>
      <td>{report.toTime}</td>
      <td>{report.noOfLeague}</td>
      <td>{report.noOfMatch}</td>
      <td>{report.beforeHDP}</td>
      <td>{report.beforeOU}</td>
      <td>{report.afterHDP}</td>
      <td>{report.afterOU}</td>
      <td>{report.differenceHDP}</td>
      <td>{report.differenceOU}</td>
    </tr>
  ));
  return (
    <>
      <Filter />
      {!!reports?.length && <GridView head={head} body={body} />}
    </>
  );
}

export default ReportPage;
