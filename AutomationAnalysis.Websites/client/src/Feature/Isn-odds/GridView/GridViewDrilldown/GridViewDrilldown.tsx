import { ReportDetail } from '../../Models/Isn-odds-Detail';
import { ReportOption } from '../../Store/Isn-odds-State';
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
      <tr
        key={`${reportDetail.leagueName}-${reportDetail.matchName}`}
        style={reportDetail.index ? { backgroundColor: '#cfeafd', fontWeight: 'bold' } : {}}
      >
        <td>{reportDetail.index}</td>
        <td>{reportDetail.matchName}</td>
        <td>{reportDetail.minute}</td>
        <td>{reportDetail.second}</td>
        <td>{reportDetail.onlySecond}</td>
        <td>{reportDetail.beforeHDP}</td>
        <td>{reportDetail.afterHDP}</td>
        <td>{reportDetail.beforeOU}</td>
        <td>{reportDetail.afterOU}</td>
        <td>{reportDetail.diffHDP}</td>
        <td>{reportDetail.diffOU}</td>
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
