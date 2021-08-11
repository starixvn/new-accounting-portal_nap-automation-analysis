import GridView from '../GridView';
import HeaderForGoal from './HeaderForGoal';
import HeaderForRedCard from './HeaderForRedCard';
import { ReportOption } from '../../Store/ISNOddsState';
import { Report } from '../../Models/ISNOdds';
import { toTwoDigitsFormat } from '../../../../Utils/HelpersUtility';

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
        <td>{toTwoDigitsFormat(report.beforeHDP)}</td>
        <td>{toTwoDigitsFormat(report.beforeOU)}</td>
        <td>{toTwoDigitsFormat(report.afterHDP)}</td>
        <td>{toTwoDigitsFormat(report.afterOU)}</td>
        <td>{toTwoDigitsFormat(report.diffHDP)}</td>
        <td>{toTwoDigitsFormat(report.diffOU)}</td>
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
