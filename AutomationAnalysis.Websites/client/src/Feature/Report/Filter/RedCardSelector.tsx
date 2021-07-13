import { Form, Table } from "react-bootstrap";
import { options } from "./Filter";
import { range } from "../../../Utils/HelperUtils";
import { ChangeEvent, useState } from "react";

const RedCardSelector = () => {
  const [redcardHome, setRedcardHome] = useState<number>(0);
  const [redcardAway, setRedcardAway] = useState<number>(0);

  const changeRedcardHome = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRedcardHome(+value);
  };

  const changeRedcardAway = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRedcardAway(+value);
  };

  return (
    <Table className="text-center" size="sm" bordered>
      <thead>
        <tr>
          <th rowSpan={2} className="align-middle redcard-header">
            RedCard
          </th>
          <th colSpan={2} className="score-header">
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
          <td>Current</td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={redcardHome}
                onChange={changeRedcardHome}
                className="home-redcard-select"
              >
                {options(range(0, 11))}
              </Form.Control>
            </Form>
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={redcardAway}
                onChange={changeRedcardAway}
                className="away-redcard-select"
              >
                {options(range(0, 11))}
              </Form.Control>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default RedCardSelector;
