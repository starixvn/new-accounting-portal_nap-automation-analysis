import { useState } from "react";
import { Table } from "react-bootstrap";
import "./InitialBetTypeRange.css";
export default function InitialBetTypeRange() {
  const [fromHDP, setFromHDP] = useState(0);
  const [toHDP, setToHDP] = useState(0);
  const [fromOU, setFromOU] = useState(0);
  const [toOU, setToOU] = useState(0);
  return (
    <Table style={{ textAlign: "center" }} size="sm" bordered>
      <thead>
        <tr>
          <th colSpan={2} className="score-header">
            Initial HDP
          </th>
          <th colSpan={2} className="score-header">
            Initial OU
          </th>
        </tr>
        <tr>
          <th className="home-bg">From</th>
          <th className="away-bg">To</th>
          <th className="home-bg">From</th>
          <th className="away-bg">To</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              aria-label="fromHDP-input"
              type="number"
              datatype="float"
              step="0.01"
              id="fname"
              name="firstname"
              value={fromHDP}
              onChange={(event: any) => {
                setFromHDP(event.target.value);
              }}
              className="input-range"
            />
          </td>
          <td>
            <input
              aria-label="toHDP-input"
              type="number"
              datatype="float"
              step="0.01"
              id="fname"
              name="firstname"
              style={{ width: 100 }}
              value={toHDP}
              onChange={(event: any) => {
                setToHDP(event.target.value);
              }}
              required
              className="input-range"
            />
          </td>
          <td>
            <input
              aria-label="fromOU-input"
              type="number"
              datatype="float"
              step="0.01"
              id="fname"
              name="firstname"
              style={{ width: 100 }}
              value={fromOU}
              onChange={(event: any) => {
                setFromOU(event.target.value);
              }}
              required
              className="input-range"
            />
          </td>
          <td>
            <input
              aria-label="toOU-input"
              type="number"
              datatype="float"
              step="0.01"
              id="fname"
              name="firstname"
              style={{ width: 100 }}
              value={toOU}
              onChange={(event: any) => {
                setToOU(event.target.value);
              }}
              required
              className="input-range"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
