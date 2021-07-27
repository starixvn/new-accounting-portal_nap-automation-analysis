import { useState } from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import HeaderForGoal from './GridView/GridViewMain/HeaderForGoal';
import { ApplicationState } from '../../configureStore';
import HeaderForRedCard from './GridView/GridViewMain/HeaderForRedCard';
import HeaderForGoalDrilldown from './GridView/GridViewDrilldown/HeaderForGoalDrilldown';
import HeaderForRedCardDrilldown from './GridView/GridViewDrilldown/HeaderForRedCardDrilldown';
import reportApi from '../../Api/reportApi';
import './ReportPage.css';

interface ReportDetail {
  fromDate: Date;
  toDate: Date;
  league: string;
  view: boolean;
  interval: number;
  fromInitialHDP: number;
  toInitialHDP: number;
  fromInitialOU: number;
  toInitialOU: number;
  homeScore: number;
  awayScore: number;
  homeRedCard: number;
  awayRedCard: number;
  mode: number;
  teamType: number;
  fromMinute: number;
  toMinute: number;
}
function ReportPage() {
  const [isChange, setIsChange] = useState(false);
  const { reports, reportOption } = useSelector((state: ApplicationState) => state.report);
  const reportState = useSelector((state: ApplicationState) => state.report);
  const head = reportOption === 'Goal' ? <HeaderForGoal /> : <HeaderForRedCard />;
  const headDrilldown = reportOption === 'Goal' ? <HeaderForGoalDrilldown /> : <HeaderForRedCardDrilldown />;
  const reportDetail = async (from: string, to: string) => {
    setIsChange(true);
    const filterReportDrilldown: ReportDetail = {
      fromDate: reportState.fromDate,
      toDate: reportState.toDate,
      teamType: reportState.teamType === 'Home' ? 0 : 1,
      league: reportState.league,
      view: reportState.view === 'Full Time',
      interval: reportState.interval,
      fromInitialHDP: +reportState.fromInitialOU,
      toInitialHDP: +reportState.toInitialHDP,
      fromInitialOU: +reportState.fromInitialOU,
      toInitialOU: +reportState.toInitialOU,
      homeScore: reportState.homeScore,
      awayScore: reportState.awayScore,
      homeRedCard: reportState.homeRedCard,
      awayRedCard: reportState.awayRedCard,
      mode: reportState.reportOption === 'Goal' ? 0 : 1,
      fromMinute: +from,
      toMinute: +to,
    };
    const result = await reportApi.getReportDetails(filterReportDrilldown);
    console.log('result', result);
  };
  const body = reports?.length ? (
    reports.map((report) => (
      <tr key={`${report.from}-${report.to}`}>
        <td>{report.from}</td>
        <td>{report.to}</td>
        <td>{report.numberOfLeague}</td>
        <td>
          <li
            key={`${report.numberOfMatch}`}
            style={{ color: 'blue', cursor: 'pointer', listStyleType: 'none' }}
            onClick={() => reportDetail(report.from, report.to)}
            onKeyDown={() => reportDetail(report.from, report.to)}
            role="presentation"
          >
            {report.numberOfMatch}
          </li>
        </td>
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
  const bodyDrilldown = <></>;
  return (
    <div className="report-container">
      <Filter />
      {isChange ? <GridView head={headDrilldown} body={bodyDrilldown} /> : <GridView head={head} body={body} />}
    </div>
  );
}

export default ReportPage;
