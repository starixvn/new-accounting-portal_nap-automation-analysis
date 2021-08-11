import GridView from '../GridView';
import HeaderForGoal from './HeaderForGoal';
import HeaderForRedCard from './HeaderForRedCard';
import { ReportOption } from '../../Store/ISNOddsState';
import { Report } from '../../Models/ISNOdds';
import { formatValue } from '../../../../Utils/HelpersUtility';

type Props = {
  mode: ReportOption;
  reports: Report[] | undefined;
  drillDown: (from: string, to: string | null) => void;
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
          <span
            className={report.numberOfMatch ? 'drilldown-link' : ''}
            onClick={() => drillDown(report.from, report.to)}
            role="presentation"
          >
            {report.numberOfMatch}
          </span>
        </td>
        <td>{formatValue(report.numberOfMatch, report.beforeHDP)}</td>
        <td>{formatValue(report.numberOfMatch, report.beforeOU)}</td>
        <td>{formatValue(report.numberOfMatch, report.afterHDP)}</td>
        <td>{formatValue(report.numberOfMatch, report.afterOU)}</td>
        <td>{formatValue(report.numberOfMatch, report.diffHDP)}</td>
        <td>{formatValue(report.numberOfMatch, report.diffOU)}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={10}>Not found data!</td>
    </tr>
  );
  return (
    <div className="grid-main">
      <GridView head={head} body={body} />
    </div>
  );
};

export default GridViewMain;
