import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReportOption, ViewOption } from '../Store/ReportState';
import { changeLeague, getReports, selectReportOption, selectTimeInterval, selectView } from '../Store/ReportActions';

import { ApplicationState } from '../../../configureStore';
import BreadcrumbFilter from './BreadcrumbFilter';
import DateRange from '../../../GlobalComponent/DateRange/DateRange';
import InitialBetTypeRange from './InitialBetTypeRange';
import RedCardSelector from './RedCardSelector';
import ScoreSelector from './ScoreSelector';
import './Filter.css';
import reportApi from '../../../Api/reportApi';
import { apiKey } from '../../../Utils/ConstantsUtil';

export const options = (values: number[]) =>
  values &&
  values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

interface FilterReport {
  fromDate: Date;
  toDate: Date;
  league: string;
  view: boolean;
  interval: number;
  fromInitialHDP: number;
  toInitialHDP: number;
  fromInitialOU: number;
  toInitialOU: number;
  homeScore: number;
  awayScore: number;
  homeRedCard: number;
  awayRedCard: number;
  mode: number;
  teamType: number;
  apiKey: string;
}

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
  const { league, interval, view, reportOption, fromDate, toDate, reports } = useSelector(
    (state: ApplicationState) => state.report,
  );
  const reportState = useSelector((state: ApplicationState) => state.report);

  const validDateRange = () => {
    const dateRange = (toDate.getTime() - fromDate.getTime()) / (24 * 3600 * 1000);
    const yesterDay = new Date(Date.now());
    yesterDay.setDate(yesterDay.getDate() - 1);
    return dateRange > 180 || fromDate > toDate || fromDate > yesterDay || toDate > yesterDay;
  };

  const submit = async () => {
    if (validDateRange()) {
      toast.error('Please choose again Date Range!');
      return;
    }
    const filter: FilterReport = {
      fromDate: reportState.fromDate,
      toDate: reportState.toDate,
      teamType: reportState.teamType === 'Home' ? 0 : 1,
      league: reportState.league,
      view: reportState.view === 'Full Time',
      interval: reportState.interval,
      fromInitialHDP: +reportState.fromInitialOU,
      toInitialHDP: +reportState.toInitialHDP,
      fromInitialOU: +reportState.fromInitialOU,
      toInitialOU: +reportState.toInitialOU,
      homeScore: reportState.homeScore,
      awayScore: reportState.awayScore,
      homeRedCard: reportState.homeRedCard,
      awayRedCard: reportState.awayRedCard,
      mode: reportState.reportOption === 'Goal' ? 0 : 1,
      apiKey,
    };
    const result = await reportApi.getReports(filter);
    dispatch(getReports(result));
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col className="filter-header p-0">
            <span className="font-weight-bold d-inline-block">ISN Odds</span>
            <Button
              variant="secondary"
              className={reportOption === 'Goal' ? 'goal-button active-button' : 'goal-button'}
              onClick={() => dispatch(selectReportOption('Goal'))}
            >
              Goal
            </Button>
            <Button
              variant="secondary"
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
        <Row>
          <Col>{!!reports?.length && <BreadcrumbFilter />}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
