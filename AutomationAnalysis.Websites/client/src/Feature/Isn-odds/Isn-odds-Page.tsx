import _ from 'lodash';
import './Isn-odds-Page.css';

import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../configureStore';
import BreadcrumbFilter from './Filter/BreadcrumbFilter';
import Filter from './Filter/Filter';
import GridViewDrilldown from './GridView/GridViewDrilldown/GridViewDrilldown';
import GridViewMain from './GridView/GridViewMain/GridViewMain';
import { ReportDetail } from './Models/Isn-odds-Detail';
import UsePageLoading from '../../GlobalComponent/UsePageLoading';
import { getReportDetails } from './Store/Isn-odds-Actions';
import { mapStateToFilter } from './Models/Isn-odds-Filter';
import reportApi from '../../Api/reportApi';

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
    dispatch(getReportDetails(fromMinute, toMinute, result));
    hideLoader();
  };

  const mainGridVisible = !!reports?.length && !reportDetails?.length;
  const detailGridVisible = !!reportDetails?.length;
  return (
    <div className="report-container">
      <>
        <Filter />
        {(mainGridVisible || detailGridVisible) && <BreadcrumbFilter />}
        {mainGridVisible && <GridViewMain mode={reportOption} reports={reports} drillDown={drillDown} />}
        {detailGridVisible && <GridViewDrilldown mode={reportOption} reportDetails={reportDetails} />}
        {loader}
      </>
    </div>
  );
}

export default ReportPage;
