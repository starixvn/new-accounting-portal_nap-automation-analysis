import { ReportDetail } from '../../Models/ReportDetail';
import { ReportOption } from '../../Store/ReportState';
import GridView from '../GridView';
import HeaderForGoalDrilldown from './HeaderForGoalDrilldown';
import HeaderForRedCardDrilldown from './HeaderForRedCardDrilldown';

type Props = {
  mode: ReportOption;
  reportDetails: ReportDetail[];
};

const GridViewDrilldown = ({ mode, reportDetails }: Props) => {
  const head = mode === 'Goal' ? <HeaderForGoalDrilldown /> : <HeaderForRedCardDrilldown />;
  const body = reportDetails?.length ? (
    reportDetails.map((reportDetail) => (
      <tr key={`${reportDetail.leagueName}-${reportDetail.matchName}`}>
        <td>{reportDetail.matchName}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={10}>No found data!</td>
    </tr>
  );
  return <GridView head={head} body={body} />;
};

export default GridViewDrilldown;
