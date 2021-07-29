import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReportOption, ViewOption } from '../Store/ISNOddsState';
import { changeLeague, getReports, selectReportOption, selectTimeInterval, selectView } from '../Store/ISNOddsActions';
import { ApplicationState } from '../../../configureStore';
import DateRange from '../../../GlobalComponent/DateRange/DateRange';
import InitialBetTypeRange from './InitialBetTypeRange';
import RedCardSelector from './RedCardSelector';
import ScoreSelector from './ScoreSelector';
import UsePageLoading from '../../../GlobalComponent/UsePageLoading';
import './Filter.css';
import reportApi from '../../../Api/reportApi';
import { mapStateToFilter } from '../Models/ISNOddsFilter';

export const options = (values: number[]) =>
  values &&
  values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

const ScoreAndRedCardChooser = (reportSelect: ReportOption) =>
  reportSelect === 'Goal' ? (
    <>
      <Col sm="3">
        <ScoreSelector />
      </Col>
      <Col sm="3">
        <RedCardSelector />
      </Col>
    </>
  ) : (
    <>
      <Col sm="3">
        <RedCardSelector />
      </Col>
      <Col sm="3">
        <ScoreSelector />
      </Col>
    </>
  );

export default function Filter() {
  const dispatch = useDispatch();
  const { league, interval, view, reportOption, fromDate, toDate } = useSelector(
    (state: ApplicationState) => state.report,
  );
  const reportState = useSelector((state: ApplicationState) => state.report);

  const validDateRange = () => {
    const dateRange = (toDate.getTime() - fromDate.getTime()) / (24 * 3600 * 1000);
    const yesterDay = new Date(Date.now());
    yesterDay.setDate(yesterDay.getDate() - 1);
    return dateRange > 180 || fromDate > toDate || fromDate > yesterDay || toDate > yesterDay;
  };
  const [loader, showLoader, hideLoader] = UsePageLoading();
  const submit = async () => {
    // if (validDateRange()) {
    //   toast.error('Please choose again Date Range!');
    //   return;
    // }
    showLoader();
    const filter = mapStateToFilter(reportState);
    const result = await reportApi.getReports(filter);
    dispatch(getReports(result));
    hideLoader();
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Row>
            <Col className="filter-header">
              <span className="font-weight-bold d-inline-block">ISN Odds</span>
              <Button
                variant="success"
                className={reportOption === 'Goal' ? 'goal-button active-button' : 'goal-button'}
                onClick={() => dispatch(selectReportOption('Goal'))}
              >
                Goal
              </Button>
              <Button
                variant="success"
                className={reportOption === 'Goal' ? 'redcard-button' : 'redcard-button active-button'}
                onClick={() => dispatch(selectReportOption('Redcard'))}
              >
                Redcard
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Form.Group as={Row} className="input-area">
            <Col sm="auto">
              <Form.Label>Date</Form.Label>
              <DateRange />
            </Col>
            <Col sm="auto">
              <Form.Label>League</Form.Label>
              <Form.Control
                type="text"
                style={{ height: '1.5rem', width: '70%' }}
                value={league}
                onChange={(e) => dispatch(changeLeague(e.target.value))}
              />
            </Col>

            <Col sm="auto">
              <Form.Label>View</Form.Label>
              <Form.Control
                as="select"
                className="filter-select"
                value={view}
                onChange={(e) => dispatch(selectView(e.target.value as ViewOption))}
              >
                <option value="Full Time">Full Time</option>
                <option value="Half Time">Half Time</option>
              </Form.Control>
            </Col>

            <Col sm="auto">
              <Form.Label>Time interval</Form.Label>
              <Form.Control
                as="select"
                className="filter-select"
                value={interval}
                onChange={(e) => dispatch(selectTimeInterval(+e.target.value))}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Row>
            <Col sm="auto">
              <InitialBetTypeRange />
            </Col>
            {ScoreAndRedCardChooser(reportOption)}
            <Col sm="auto">
              <Button variant="success" onClick={submit}>
                Query
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {loader}
    </>
  );
}
