import { Form, Table } from "react-bootstrap";
import { options } from "./Filter";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../configureStore";
import { selectAwayRedcard, selectHomeRedcard } from "../Store/ReportActions";

const RedCardSelector = () => {
  const dispatch = useDispatch();
  const redcardHome = useSelector((state: ApplicationState) => state.report.redcardHome);
  const redcardAway = useSelector((state: ApplicationState) => state.report.redcardAway);

  return (
    <Table className="text-center" size="sm" bordered>
      <thead>
        <tr>
          <th rowSpan={2} className="align-middle redcard-header">
            Redcard
          </th>
          <th colSpan={2} className="score-header ">
            Red card
          </th>
        </tr>
        <tr>
          <th className="home-bg">Home</th>
          <th className="away-bg">Away</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="align-middle" style={{ fontSize: "1rem" }}>
            Current
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={redcardHome}
                onChange={(e) => dispatch(selectHomeRedcard(+e.target.value))}
                className="home-redcard-select table-select"
              >
                {options(_.range(0, 11))}
              </Form.Control>
            </Form>
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={redcardAway}
                onChange={(e) => dispatch(selectAwayRedcard(+e.target.value))}
                className="away-redcard-select table-select"
              >
                {options(_.range(0, 11))}
              </Form.Control>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default RedCardSelector;
