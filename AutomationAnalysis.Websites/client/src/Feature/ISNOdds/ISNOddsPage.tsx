import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../configureStore';
import BreadcrumbFilter from './Filter/BreadcrumbFilter';
import Filter from './Filter/Filter';
import GridViewDrilldown from './GridView/GridViewDrilldown/GridViewDrilldown';
import GridViewMain from './GridView/GridViewMain/GridViewMain';
import UsePageLoading from '../../GlobalComponent/UsePageLoading';
import { getReportDetails } from './Store/ISNOddsActions';
import { mapStateToFilter } from './Models/ISNOddsFilter';
import reportApi from '../../Api/reportApi';
import processReportDetailsData from '../../Utils/HelpersUtility';
import './ISNOddsPage.css';

function ReportPage() {
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { reports, reportOption, reportDetails } = reportState;
  const dispatch = useDispatch();
  const [loader, showLoader, hideLoader] = UsePageLoading();

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
