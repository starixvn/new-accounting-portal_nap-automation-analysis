import { Breadcrumb, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ImFileExcel } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import FileSaver from 'file-saver';
import { ApplicationState } from '../../../configureStore';
import { showMainReport } from '../Store/ISNOddsActions';
import reportApi from '../../../Api/reportApi';
import { isNumber } from '../../../Utils/HelpersUtility';

const BreadcrumbFilter = () => {
  const dispatch = useDispatch();
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { reportOption, fromMinute, toMinute, reportDetails } = reportState;

  const detailGridVisible = !!reportDetails;
  const parentBreadcrumbText = `ISN Odds Data By ${reportOption}`;
  const fromMinuteInNumber = `${fromMinute}:00`;
  const toMinuteInNumber = isNumber(toMinute) ? `${toMinute}:00` : toMinute;
  const currentBreadcrumbText = `${fromMinuteInNumber}-${toMinuteInNumber}`;

  const toolTip = <Tooltip id="tool-top">Download report</Tooltip>;

  const downloadReportExcel = async () => {
    const result = await reportApi.getReportExcel(reportState);
    FileSaver.saveAs(result, `report_${new Date().toLocaleDateString()}.xlsx`);
  };

  return (
    <div className="breadcrumb-main">
      <Breadcrumb>
        {detailGridVisible ? (
          <Breadcrumb.Item
            style={{ color: 'blue', textDecorationLine: 'underline' }}
            href="#"
            onClick={() => dispatch(showMainReport())}
          >
            {parentBreadcrumbText}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item style={{ height: '1rem' }} />
        )}
        {detailGridVisible && (
          <Breadcrumb.Item style={{ color: 'black' }} active>
            {currentBreadcrumbText}
          </Breadcrumb.Item>
        )}
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
