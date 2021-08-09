import { ChangeEvent, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { range } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { options } from './Filter';
import { TeamOption } from '../Store/ISNOddsState';
import {
  selectAwayScore,
  selectTeamOption,
  selectHomeScore,
  selectHomeRedcard,
  selectAwayRedcard,
} from '../Store/ISNOddsActions';
import { ApplicationState } from '../../../configureStore';

const ScoreSelector = () => {
  const dispatch = useDispatch();
  const reportState = useSelector((state: ApplicationState) => state.report);
  const { teamType, homeScore, awayScore, reportOption, homeRedCard, awayRedCard } = reportState;
  const homeScoreOrRedCard = reportOption === 'Goal' ? homeScore : homeRedCard;
  const awayScoreOrRedCard = reportOption === 'Goal' ? awayScore : awayRedCard;
  const rangeOptions = range(0, 11);
  const disabledZero = teamType === 'Home';

  const changeTeamType = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as TeamOption;
    dispatch(selectTeamOption(value));
  };

  const changeHomeScoreOrRedCard = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (reportOption === 'Goal') {
      dispatch(selectHomeScore(value));
      return;
    }
    dispatch(selectHomeRedcard(value));
  };

  const changeAwayScoreOrRedCard = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (reportOption === 'Goal') {
      dispatch(selectAwayScore(value));
      return;
    }
    dispatch(selectAwayRedcard(value));
  };

  return (
    <Table className="text-center" size="sm" bordered>
      <thead>
        <tr>
          <th rowSpan={2} className="align-middle goal-header">
            {reportOption === 'Goal' ? 'Goal' : 'Red Card'}
          </th>
          <th colSpan={2} className="score-header">
            {reportOption === 'Goal' ? 'Score' : 'Red Card'}
          </th>
        </tr>
        <tr>
          <th className="away-bg">Home</th>
          <th className="away-bg">Away</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form>
              <Form.Control
                as="select"
                onChange={changeTeamType}
                value={teamType}
                className="goal-select table-select "
              >
                <option value="Home">Home</option>
                <option value="Away">Away</option>
              </Form.Control>
            </Form>
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={homeScoreOrRedCard}
                onChange={changeHomeScoreOrRedCard}
                className="home-score-select table-select"
              >
                {options(rangeOptions, disabledZero)}
              </Form.Control>
            </Form>
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={awayScoreOrRedCard}
                onChange={changeAwayScoreOrRedCard}
                className="away-score-select table-select"
              >
                {options(rangeOptions, !disabledZero)}
              </Form.Control>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ScoreSelector;
