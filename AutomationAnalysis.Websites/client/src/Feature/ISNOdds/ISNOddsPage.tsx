import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../configureStore';
import BreadcrumbFilter from './Filter/BreadcrumbFilter';
import Filter from './Filter/Filter';
import GridViewDrilldown from './GridView/GridViewDrilldown/GridViewDrilldown';
import GridViewMain from './GridView/GridViewMain/GridViewMain';
import { getReportDetails, gettingData } from './Store/ISNOddsActions';
import { mapStateToFilter } from './Models/ISNOddsFilter';
import reportApi from '../../Api/reportApi';
import { processReportDetailsData } from '../../Utils/HelpersUtility';
import './ISNOddsPage.css';
import PageLoading from '../../GlobalComponent/PageLoading';

function ReportPage() {
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { reports, reportOption, reportDetails, isLoading } = reportState;
  const dispatch = useDispatch();

  const drillDown = async (fromMinute: string, toMinute: string | null) => {
    dispatch(gettingData());
    const [processedFromMinute] = fromMinute.split(':');
    const filter = { ...mapStateToFilter(reportState), fromMinute: processedFromMinute, toMinute };
    console.log(filter);
    const data = (await reportApi.getReportDetails(filter)) || [];
    const result = processReportDetailsData(data);
    dispatch(getReportDetails(processedFromMinute, toMinute, result));
  };

  const mainGridVisible = !!reports && !reportDetails;
  const detailGridVisible = !!reportDetails;
  return (
    <div className="report-container">
      <>
        <Filter />
        {(mainGridVisible || detailGridVisible) && <BreadcrumbFilter />}
        {mainGridVisible && <GridViewMain mode={reportOption} reports={reports} drillDown={drillDown} />}
        {detailGridVisible && <GridViewDrilldown mode={reportOption} reportDetails={reportDetails} />}
        {isLoading && <PageLoading />}
      </>
    </div>
  );
}

export default ReportPage;
