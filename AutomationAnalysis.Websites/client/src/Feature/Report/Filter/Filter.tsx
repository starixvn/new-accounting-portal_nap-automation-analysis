import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DateRange from "../../../GlobalComponent/DateRange/DateRange";
import InitialBetTypeRange from "../../../GlobalComponent/InitialBetTypeRange/InitialBetTypeRange";
import "./Filter.css";
import RedCardSelector from "./RedCardSelector";
import ScoreSelector from "./ScoreSelector";
import BreadcrumbFilter from "./BreadcrumbFilter";

export const options = (values: number[]) =>
  values &&
  values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

type ReportOption = "Score" | "Redcard";

const ScoreAndRedCardChooser = (reportSelect: ReportOption) =>
  reportSelect === "Score" ? (
    <>
      <Col>
        <ScoreSelector />
      </Col>
      <Col>
        <RedCardSelector />
      </Col>
    </>
  ) : (
    <>
      <Col>
        <RedCardSelector />
      </Col>
      <Col>
        <ScoreSelector />
      </Col>
    </>
  );

export default function Filter() {
  const [reportSelect, setReportSelect] = useState<ReportOption>("Score");

  const clickedGoal = () => {
    setReportSelect("Score");
  };

  const clickedRedcard = () => {
    setReportSelect("Redcard");
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col className="filter-header p-0">
            <span className="font-weight-bold d-inline-block">ISN Odds</span>
            <Button
              variant="secondary"
              className={
                reportSelect === "Score"
                  ? "goal-button active-button"
                  : "goal-button"
              }
              onClick={clickedGoal}
            >
              Goal
            </Button>
            <Button
              variant="secondary"
              className={
                reportSelect === "Score"
                  ? "redcard-button"
                  : "redcard-button active-button"
              }
              onClick={clickedRedcard}
            >
              Redcard
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Form.Group as={Row} className="input-area">
          <Col>
            <Form.Label>Date</Form.Label>
            <DateRange />
          </Col>
          <Col sm="3">
            <Form.Label>League</Form.Label>
            <Form.Control
              type="text"
              style={{ height: "2rem", width: "50%" }}
            />
          </Col>

          <Col sm="2">
            <Form.Label>View</Form.Label>
            <Form.Control as="select" className="filter-select">
              <option value="Full Time">Full Time</option>
              <option value="Half Time">Half Time</option>
            </Form.Control>
          </Col>

          <Col sm="3">
            <Form.Label>Time interval</Form.Label>
            <Form.Control as="select" className="filter-select">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Row>
          <Col>
            <InitialBetTypeRange />
          </Col>
          {ScoreAndRedCardChooser(reportSelect)}
          <Col sm="1">
            <Button variant="success">Query</Button>
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
