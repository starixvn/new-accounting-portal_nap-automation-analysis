import { Breadcrumb, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ImFileExcel } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../configureStore';
import { showMainReport } from '../Store/ISNOddsActions';
import numberUtility from '../../../Utils/NumberUtility';
import reportApi from '../../../Api/reportApi';

const BreadcrumbFilter = () => {
  const { reportOption, fromMinute, toMinute, reportDetails } = useSelector((state: ApplicationState) => state.report);
  const dispatch = useDispatch();
  const goBackToMainReport = () => {
    dispatch(showMainReport());
  };

  const detailGridVisible = !!reportDetails;

  const fromMinuteInNumber = parseInt(fromMinute, 10);
  const toMinuteInNumber = parseInt(toMinute, 10);

  const parentBreadcrumbText = `ISN Odds Data By ${reportOption}`;
  const currentBreadcrumbText = numberUtility.toTimeRangeString(fromMinuteInNumber, toMinuteInNumber);

  const toolTip = <Tooltip id="tool-top">Download report</Tooltip>;

  const reportState = useSelector((state: ApplicationState) => state.report);
  const downloadReportExcel = async () => {
    const result = await reportApi.getReportExcel(reportState);
  };

  return (
    <div className="breadcrumb-main">
      <Breadcrumb>
        {detailGridVisible ? (
          <Breadcrumb.Item href="#" onClick={goBackToMainReport}>
            {parentBreadcrumbText}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item style={{ height: '1rem' }} />
        )}
        {detailGridVisible && <Breadcrumb.Item active>{currentBreadcrumbText}</Breadcrumb.Item>}
      </Breadcrumb>
      <OverlayTrigger placement="top" overlay={toolTip}>
        <Button onClick={downloadReportExcel}>
          <ImFileExcel size="25" color="#28a745" />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default BreadcrumbFilter;
