import GridView from '../GridView';
import HeaderForGoal from './HeaderForGoal';
import HeaderForRedCard from './HeaderForRedCard';
import { ReportOption } from '../../Store/Isn-odds-State';
import { Report } from '../../Models/Isn-odds';

type Props = {
  mode: ReportOption;
  reports: Report[];
  drillDown: (from: string, to: string) => void;
};

const GridViewMain = ({ mode, reports, drillDown }: Props) => {
  const head = mode === 'Goal' ? <HeaderForGoal /> : <HeaderForRedCard />;
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
            onClick={() => drillDown(report.from, report.to)}
            onKeyDown={() => drillDown(report.from, report.to)}
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
  return (
    <div className="grid-main">
      <GridView head={head} body={body} />
    </div>
  );
};

export default GridViewMain;
