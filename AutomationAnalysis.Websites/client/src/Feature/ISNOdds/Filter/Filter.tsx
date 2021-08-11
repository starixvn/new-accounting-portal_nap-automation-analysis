import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ViewOption } from '../Store/ISNOddsState';
import {
  changeLeague,
  getReports,
  gettingData,
  selectReportOption,
  selectTimeInterval,
  selectView,
} from '../Store/ISNOddsActions';
import { ApplicationState } from '../../../configureStore';
import DateRange from '../../../GlobalComponent/DateRange/DateRange';
import InitialBetTypeRange from './InitialBetTypeRange';
import CurrentRedCardOrGoalSelector from './CurrentRedCardOrGoalSelector';
import TeamTypeGoalOrRedCardSelector from './TeamTypeGoalOrRedCardSelector';
import PageLoading from '../../../GlobalComponent/PageLoading';
import './Filter.css';
import reportApi from '../../../Api/reportApi';
import { mapStateToFilter } from '../Models/ISNOddsFilter';
import { generateFullIntervalReports } from '../../../Utils/HelpersUtility';

export const options = (values: number[], disabledZero?: boolean) =>
  values &&
  values.map((value) => (
    <option key={value} value={value} disabled={value === 0 && !!disabledZero}>
      {value}
    </option>
  ));

export default function Filter() {
  const dispatch = useDispatch();
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { league, interval, view, reportOption, fromDate, toDate, isLoading } = reportState;

  const validDateRange = () => {
    const dateRange = (toDate.getTime() - fromDate.getTime()) / (24 * 3600 * 1000);
    const yesterDay = new Date(Date.now());
    yesterDay.setDate(yesterDay.getDate() - 1);
    return dateRange > 365;
  };

  const submit = async () => {
    if (validDateRange()) {
      toast.error('Date Range not be larger than 1 year!');
      return;
    }
    dispatch(gettingData());
    const filter = mapStateToFilter(reportState);
    const result = await reportApi.getReports(filter);
    const processedResult = result.length ? generateFullIntervalReports(interval, result) : [];
    dispatch(getReports(processedResult));
  };

  const handleButtonGoalClicked = () => {
    if (reportOption === 'Goal') return;
    dispatch(selectReportOption('Goal'));
  };

  const handleButtonRedCardClicked = () => {
    if (reportOption === 'Redcard') return;
    dispatch(selectReportOption('Redcard'));
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
                onClick={handleButtonGoalClicked}
              >
                Goal
              </Button>
              <Button
                variant="success"
                className={reportOption === 'Goal' ? 'redcard-button' : 'redcard-button active-button'}
                onClick={handleButtonRedCardClicked}
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
            <Col sm="3">
              <TeamTypeGoalOrRedCardSelector />
            </Col>
            <Col sm="3">
              <CurrentRedCardOrGoalSelector />
            </Col>
            <Col sm="auto">
              <Button variant="success" onClick={submit}>
                Query
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {isLoading && <PageLoading />}
    </>
  );
}
