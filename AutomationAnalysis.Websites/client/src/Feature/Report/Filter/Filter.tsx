import { Button, Card, Col, Row } from "react-bootstrap";
import ScoreSelector from "./ScoreSelector";
import RedCardSelector from "./RedCardSelector";
import "./Filter.css";
import InitialBetTypeRange from "../../../GlobalComponent/InitialBetTypeRange/InitialBetTypeRange";
import DateRange from "../../../GlobalComponent/DateRange/DateRange";
import { useState } from "react";

export type GoalOption = "Home" | "Away";

export const options = (values: number[]) => values && values.map(value => (
    <option key={value} value={value}>{value}</option>
));


const Filter = () => {
    const [league, setLeague] = useState("");
    const [view, setView] = useState("Full Time");
    const [timeInterval, setTimeInterval] = useState("5");

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col sm={1}>
                        <label className="date-label">Date</label>
                    </Col>
                    <Col>
                        <DateRange />
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <label>League</label>
                    </Col>
                    <Col>
                        <input
                            type="text"
                            id="fname"
                            onChange={(event) => {
                                setLeague(event.target.value);
                            }}
                            name="firstname"
                            style={{ width: 370 }}
                            required
                            value={league}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <label>View</label>
                    </Col>
                    <Col>
                        <select
                            onChange={(event) => {
                                setView(event.target.value);
                            }}
                            style={{ width: 100, height: 30 }}
                            value={view}
                        >
                            <option value="Full Time">Full Time</option>
                            <option value="Half Time">Half Time</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <label>Time Interval</label>
                    </Col>
                    <Col>
                        <select
                            onChange={(event) => {
                                setTimeInterval(event.target.value);
                            }}
                            value={timeInterval}
                            id="country"
                            name="country"
                            style={{ width: 100, height: 30 }}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InitialBetTypeRange />
                    </Col>
                    <Col>
                        <ScoreSelector />
                    </Col>
                    <Col>
                        <RedCardSelector />
                    </Col>
                    <Col>
                        <Button variant="success">Query</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Filter;