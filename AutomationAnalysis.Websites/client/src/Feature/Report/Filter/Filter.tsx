import {
  Button, Card, Col, Form, Row,
} from 'react-bootstrap';
import DateRange from '../../../GlobalComponent/DateRange/DateRange';
import InitialBetTypeRange from './InitialBetTypeRange';
import './Filter.css';
import RedCardSelector from './RedCardSelector';
import ScoreSelector from './ScoreSelector';
import BreadcrumbFilter from './BreadcrumbFilter';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../configureStore';
import {
  changeLeague, selectReportOption, selectTimeInterval, selectView,
} from '../Store/ReportActions';
import { ReportOption, ViewOption } from '../Store/ReportState';

export const options = (values: number[]) => values
  && values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

const ScoreAndRedCardChooser = (reportSelect: ReportOption) => (reportSelect === 'Score' ? (
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
));

export default function Filter() {
  const dispatch = useDispatch();
  const league = useSelector((state: ApplicationState) => state.report.league);
  const timeInterval = useSelector((state: ApplicationState) => state.report.timeInterval);
  const viewOption = useSelector((state: ApplicationState) => state.report.viewOption);
  const reportOption = useSelector((state: ApplicationState) => state.report.reportOption);

  const reportSate = useSelector((state: ApplicationState) => state.report);

  const submit = () => {
    console.log({ reportSate });
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col className="filter-header p-0">
            <span className="font-weight-bold d-inline-block">ISN Odds</span>
            <Button
              variant="secondary"
              className={reportOption === 'Score' ? 'goal-button active-button' : 'goal-button'}
              onClick={() => dispatch(selectReportOption('Score'))}
            >
              Goal
            </Button>
            <Button
              variant="secondary"
              className={reportOption === 'Score' ? 'redcard-button' : 'redcard-button active-button'}
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
              value={viewOption}
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
              value={timeInterval}
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
          <Col>
            <BreadcrumbFilter />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
