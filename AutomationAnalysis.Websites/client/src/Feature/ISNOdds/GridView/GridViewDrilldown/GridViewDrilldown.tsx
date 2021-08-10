import { toTwoDigitsFormat } from '../../../../Utils/HelpersUtility';
import { ReportDetail } from '../../Models/ISNOddsDetail';
import { ReportOption } from '../../Store/ISNOddsState';
import GridView from '../GridView';
import HeaderForGoalDrilldown from './HeaderForGoalDrilldown';
import HeaderForRedCardDrilldown from './HeaderForRedCardDrilldown';

type Props = {
  mode: ReportOption;
  reportDetails: ReportDetail[] | undefined;
};

const GridViewDrilldown = ({ mode, reportDetails }: Props) => {
  const head = mode === 'Goal' ? <HeaderForGoalDrilldown /> : <HeaderForRedCardDrilldown />;
  const body = reportDetails?.length ? (
    reportDetails.map((reportDetail, index) => (
      <tr
        key={`${reportDetail.leagueName}-${reportDetail.matchName}-${index}`}
        style={reportDetail.index ? { backgroundColor: '#cfeafd', fontWeight: 'bold' } : {}}
      >
        <td className={reportDetail.index ? 'font-weight-500' : ''}>{reportDetail.index}</td>
        <td className={reportDetail.index ? 'font-weight-500' : 'text-start'}>{reportDetail.matchName}</td>
        <td>{reportDetail.minute}</td>
        <td>{reportDetail.second}</td>
        <td>{reportDetail.onlySecond}</td>
        <td>{toTwoDigitsFormat(reportDetail.beforeHDP)}</td>
        <td>{toTwoDigitsFormat(reportDetail.afterHDP)}</td>
        <td>{toTwoDigitsFormat(reportDetail.beforeOU)}</td>
        <td>{toTwoDigitsFormat(reportDetail.afterOU)}</td>
        <td>{toTwoDigitsFormat(reportDetail.diffHDP)}</td>
        <td>{toTwoDigitsFormat(reportDetail.diffOU)}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={10}>Not found data!</td>
    </tr>
  );
  return <GridView head={head} body={body} />;
};

export default GridViewDrilldown;
