import { ChangeEvent } from 'react';
import { Form, Table } from 'react-bootstrap';
import { range } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { options } from './Filter';
import { ApplicationState } from '../../../configureStore';
import { selectAwayRedcard, selectAwayScore, selectHomeRedcard, selectHomeScore } from '../Store/ISNOddsActions';

const RedCardSelector = () => {
  const dispatch = useDispatch();
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { homeRedCard, awayRedCard, reportOption, homeScore, awayScore } = reportState;
  const homeRedCardOrScore = reportOption === 'Goal' ? homeRedCard : homeScore;
  const awayRedCardOrScore = reportOption === 'Goal' ? awayRedCard : awayScore;

  const changeHomeRedCardOrScore = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (reportOption === 'Goal') {
      dispatch(selectHomeRedcard(value));
      return;
    }
    dispatch(selectHomeScore(value));
  };

  const changeAwayRedCardOrScore = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (reportOption === 'Goal') {
      dispatch(selectAwayRedcard(value));
      return;
    }
    dispatch(selectAwayScore(value));
  };

  return (
    <Table bordered size="sm" className="text-center">
      <thead>
        <tr>
          <th rowSpan={2} className="align-middle redcard-header">
            {reportOption === 'Goal' ? 'Red Card' : 'Goal'}
          </th>
          <th colSpan={2} className="score-header ">
            {reportOption === 'Goal' ? 'Red Card' : 'Score'}
          </th>
        </tr>
        <tr>
          <th className="away-bg">Home</th>
          <th className="away-bg">Away</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="align-middle" style={{ fontSize: '1rem' }}>
            Current
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={homeRedCardOrScore}
                onChange={changeHomeRedCardOrScore}
                className="home-redcard-select table-select"
              >
                {options(range(0, 11))}
              </Form.Control>
            </Form>
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={awayRedCardOrScore}
                onChange={changeAwayRedCardOrScore}
                className="away-redcard-select table-select"
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
