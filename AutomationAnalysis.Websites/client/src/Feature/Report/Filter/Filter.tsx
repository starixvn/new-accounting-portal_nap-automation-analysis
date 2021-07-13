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
                    <Col className="filter-header">
                        <span className="font-weight-bold d-inline-block">ISN Odds</span>
                        <Button
                            variant="secondary"
                            className={reportSelect === "Score" ? "goal-button active-button" : "goal-button"}
                            onClick={clickedGoal}
                        >
                            Goal
                        </Button>
                        <Button
                            variant="secondary"
                            className={reportSelect === "Score" ? "redcard-button" : "redcard-button active-button"}
                            onClick={clickedRedcard}
                        >
                            Redcard
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Form.Group as={Row}>
                    <Form.Label column sm="1">
                        Date
                    </Form.Label>
                    <Col sm="4">
                        <DateRange />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="1">
                        League
                    </Form.Label>
                    <Col>
                        <input style={{ width: 370 }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="1">
                        View
                    </Form.Label>
                    <Col>
                        <select style={{ width: 100, height: 30 }}>
                            <option value="Full Time">Full Time</option>
                            <option value="Half Time">Half Time</option>
                        </select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="1">
                        Time interval
                    </Form.Label>
                    <Col>
                        <select style={{ width: 100, height: 30 }}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </Col>
                </Form.Group>
                <Row>
                    <Col>
                        <InitialBetTypeRange />
                    </Col>
                    {reportSelect === "Score" ? (
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
                    )}
                    <Col>
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
