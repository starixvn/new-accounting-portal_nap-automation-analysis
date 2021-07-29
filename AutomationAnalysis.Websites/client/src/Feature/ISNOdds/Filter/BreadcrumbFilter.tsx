import { Breadcrumb } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../configureStore';
import { showMainReport } from '../Store/ISNOddsActions';
import numberUtility from '../../../Utils/NumberUtility';

const BreadcrumbFilter = () => {
  const { reportOption, fromMinute, toMinute, reportDetails } = useSelector((state: ApplicationState) => state.report);
  const dispatch = useDispatch();
  const goBackToMainReport = () => {
    dispatch(showMainReport());
  };

  const detailGridVisible = !!reportDetails?.length;

  const fromMinuteInNumber = parseInt(fromMinute, 10);
  const toMinuteInNumber = parseInt(toMinute, 10);

  const parentBreadcrumbText = `ISN Odds Data By ${reportOption}`;
  const currentBreadcrumbText = numberUtility.toTimeRangeString(fromMinuteInNumber, toMinuteInNumber);

  return (
    <Breadcrumb className="breadcrumb-main">
      {detailGridVisible ? (
        <Breadcrumb.Item href="#" onClick={goBackToMainReport}>
          {parentBreadcrumbText}
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item style={{ height: '1rem' }} />
      )}
      {detailGridVisible && <Breadcrumb.Item active>{currentBreadcrumbText}</Breadcrumb.Item>}
    </Breadcrumb>
  );
};

export default BreadcrumbFilter;
