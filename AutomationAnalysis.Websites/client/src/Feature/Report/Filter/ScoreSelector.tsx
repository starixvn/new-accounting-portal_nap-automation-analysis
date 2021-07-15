import { ChangeEvent, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { options } from "./Filter";
import _ from "lodash";
import { GoalOption } from "../Store/ReportState";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAwayScore,
  selectGoalOption,
  selectHomeScore,
} from "../Store/ReportActions";
import { ApplicationState } from "../../../configureStore";

const ScoreSelector = () => {
  const dispatch = useDispatch();
  const goalOption = useSelector(
    (state: ApplicationState) => state.report.goalOption
  );
  const scoreHome = useSelector(
    (state: ApplicationState) => state.report.scoreHome
  );
  const scoreAway = useSelector(
    (state: ApplicationState) => state.report.scoreAway
  );
  const [homeScoreOptions, setHomeScoreOptions] = useState<number[]>(
    _.range(1, 11)
  );
  const [awayScoreOptions, setAwayScoreOptions] = useState<number[]>(
    _.range(0, 11)
  );

  const changeGoalOption = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectGoalOption(e.target.value as GoalOption));
    if (goalOption === "Home") {
      setHomeScoreOptions(_.range(1, 11));
      setAwayScoreOptions(_.range(0, 11));
    } else {
      setHomeScoreOptions(_.range(0, 11));
      setAwayScoreOptions(_.range(1, 11));
    }
  };

  return (
    <Table className="text-center" size="sm" bordered>
      <thead>
        <tr>
          <th rowSpan={2} className="align-middle goal-header">
            Goal
          </th>
          <th colSpan={2} className="score-header">
            Score
          </th>
        </tr>
        <tr>
          <th className="home-bg">Home</th>
          <th className="away-bg">Away</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form>
              <Form.Control
                as="select"
                onChange={changeGoalOption}
                value={goalOption}
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
                value={scoreHome}
                onChange={(e) => dispatch(selectHomeScore(+e.target.value))}
                className="home-score-select table-select"
              >
                {options(homeScoreOptions)}
              </Form.Control>
            </Form>
          </td>
          <td>
            <Form>
              <Form.Control
                as="select"
                value={scoreAway}
                onChange={(e) => dispatch(selectAwayScore(+e.target.value))}
                className="away-score-select table-select"
              >
                {options(awayScoreOptions)}
              </Form.Control>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ScoreSelector;
