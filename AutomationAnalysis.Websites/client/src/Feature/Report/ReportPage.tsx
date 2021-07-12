import "./ReportPage.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import InitialBetTypeRange from "../../GlobalComponent/InitialBetTypeRange/InitialBetTypeRange";
import ScoreSelector from "./Filter/ScoreSelector";
import RedCardSelector from "./Filter/RedCardSelector";
import Filter from "./Filter/Filter";
function ReportPage() {
    return (
        <div className="header">
            <h1>ReportPage</h1>
            <Card className="card-body">
                <Card.Body>
                    <Row>
                        <Filter />
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
        </div>
    );
}

export default ReportPage;
