import { Button, Card, Col, Row } from "react-bootstrap";
import ScoreSelector from "./ScoreSelector";
import RedCardSelector from "./RedCardSelector";
import "./Filter.css";

export type GoalOption = "Home" | "Away";

export const options = (values: number[]) => values && values.map(value => (
    <option key={value} value={value}>{value}</option>
));


const Filter = () => {
    return (
        <Card>
            <Row>
                <Col>

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
        </Card>
    );
};

export default Filter;