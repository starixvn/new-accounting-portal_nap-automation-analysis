import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Filter from './Filter/Filter';
import { ApplicationState } from '../../configureStore';
import GridViewMain from './GridView/GridViewMain/GridViewMain';
import GridViewDrilldown from './GridView/GridViewDrilldown/GridViewDrilldown';
import UsePageLoading from '../../GlobalComponent/UsePageLoading';
import './Isn-odds-Page.css';
import { mapStateToFilter } from './Models/Isn-odds-Filter';
import reportApi from '../../Api/reportApi';
import { ReportDetail } from './Models/Isn-odds-Detail';
import { getReportDetails } from './Store/Isn-odds-Actions';

function ReportPage() {
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { reports, reportOption, reportDetails } = reportState;
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = UsePageLoading();
  const headGroupByLeagueNames = (data: ReportDetail[]) =>
    _.chain(data)
      .groupBy((x) => x.leagueName)
      .map((value, key) => ({
        leagueName: key,
        matchName: key,
        beforeHDP: _.round(_.meanBy(value, 'beforeHDP'), 2),
        afterHDP: _.round(_.meanBy(value, 'afterHDP'), 2),
        beforeOU: _.round(_.meanBy(value, 'beforeOU'), 2),
        afterOU: _.round(_.meanBy(value, 'afterOU'), 2),
        diffHDP: _.round(_.meanBy(value, 'diffHDP'), 2),
        diffOU: _.round(_.meanBy(value, 'diffOU'), 2),
      }))
      .value();
  const processReportDetailsData = (data: ReportDetail[]) => {
    const result: ReportDetail[] = [];
    const heads = headGroupByLeagueNames(data);

    heads.forEach((head, index) => {
      const indexHead = index + 1;
      result.push({ ...head, index: indexHead });
      const filtered = data.filter((value) => value.leagueName === head.leagueName);
      result.push(...filtered);
    });
    return result;
  };

  const drillDown = async (fromMinute: string, toMinute: string) => {
    showLoader();
    const filter = { ...mapStateToFilter(reportState), fromMinute, toMinute };
    const data = await reportApi.getReportDetails(filter);
    const result = processReportDetailsData(data);
    dispatch(getReportDetails(result));
    hideLoader();
  };

  return (
    <div className="report-container">
      <>
        <Filter />
        {!!reports?.length && !reportDetails?.length && (
          <GridViewMain mode={reportOption} reports={reports} drillDown={drillDown} />
        )}
        {!!reportDetails?.length && <GridViewDrilldown mode={reportOption} reportDetails={reportDetails} />}
        {loader}
      </>
    </div>
  );
}

export default ReportPage;
