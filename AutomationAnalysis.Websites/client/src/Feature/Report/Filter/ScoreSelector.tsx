import { ChangeEvent, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { GoalOption, options } from "./Filter";
import { range } from "../../../Utils/HelperUtils";


const ScoreSelector = () => {
    const [homeScoreOptions, setHomeScoreOptions] = useState<number[]>(range(1, 10));
    const [awayScoreOptions, setAwayScoreOptions] = useState<number[]>(range(0, 11));
    const [homeScore, setHomeScore] = useState<number>(1);
    const [awayScore, setAwayScore] = useState<number>(1);

    const changeGoalOption = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as GoalOption;

        if (value === "Home") {
            setHomeScoreOptions(range(1, 10));
            setAwayScoreOptions(range(0, 11));
            setHomeScore(1);
            setAwayScore(0);
        } else {
            setHomeScoreOptions(range(0, 11));
            setAwayScoreOptions(range(1, 10));
            setHomeScore(0);
            setAwayScore(1);
        }
    };

    const changeHomeScore = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHomeScore(+value);
    };

    const changeAwayScore = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAwayScore(+value);
    };

    return (
        <Table className="text-center" size="sm" bordered>
            <thead>
                <tr>
                    <th rowSpan={2} className="align-middle goal-header">Goal</th>
                    <th colSpan={2} className="score-header">Score</th>
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
                            <Form.Control as="select" onChange={changeGoalOption}>
                                <option value="Home">Home</option>
                                <option value="Away">Away</option>
                            </Form.Control>
                        </Form>
                    </td>
                    <td>
                        <Form>
                            <Form.Control as="select" value={homeScore} onChange={changeHomeScore}>
                                {options(homeScoreOptions)}
                            </Form.Control>
                        </Form>
                    </td>
                    <td>
                        <Form>
                            <Form.Control as="select" value={awayScore} onChange={changeAwayScore}>
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