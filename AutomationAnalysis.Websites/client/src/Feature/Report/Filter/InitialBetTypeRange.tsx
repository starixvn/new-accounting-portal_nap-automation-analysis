import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../configureStore';
import { changeFromHDP, changeFromOU, changeToHDP, changeToOU } from '../Store/ReportActions';
import './InitialBetTypeRange.css';

export default function InitialBetTypeRange() {
  const dispatch = useDispatch();
  const fromHDP = useSelector((state: ApplicationState) => state.report.fromHDP);
  const toHDP = useSelector((state: ApplicationState) => state.report.toHDP);
  const fromOU = useSelector((state: ApplicationState) => state.report.fromOU);
  const toOU = useSelector((state: ApplicationState) => state.report.toOU);

  return (
    <Table style={{ textAlign: 'center' }} size="sm" bordered>
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
              datatype="decimal"
              step="0.01"
              value={fromHDP}
              className="input-range"
              onChange={(e) => dispatch(changeFromHDP(e.target.value))}
            />
          </td>
          <td>
            <input
              aria-label="toHDP-input"
              type="number"
              datatype="decimal"
              step="0.01"
              value={toHDP}
              className="input-range"
              onChange={(e) => dispatch(changeToHDP(e.target.value))}
            />
          </td>
          <td>
            <input
              aria-label="fromOU-input"
              type="number"
              datatype="decimal"
              step="0.01"
              value={fromOU}
              className="input-range"
              onChange={(e) => dispatch(changeFromOU(e.target.value))}
            />
          </td>
          <td>
            <input
              aria-label="toOU-input"
              type="number"
              datatype="decimal"
              step="0.01"
              value={toOU}
              className="input-range"
              onChange={(e) => dispatch(changeToOU(e.target.value))}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
