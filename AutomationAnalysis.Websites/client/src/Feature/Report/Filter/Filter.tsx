import { useState } from "react";
import DateRange from "../../../GlobalComponent/DateRange/DateRange";
import "./Filter.css";
export default function Filter() {
    const [league, setLeague] = useState("");
    const [view, setView] = useState("Full Time");
    const [timeInterval, setTimeInterval] = useState("5");
    return (
        <div className="containers">
            <form>
                <div className="row">
                    <div className="label-content">
                        <label className="date-label">Date</label>
                    </div>
                    <div className="filter">
                        <DateRange />
                    </div>
                </div>
                <div className="row">
                    <div className="label-content">
                        <label>League</label>
                    </div>
                    <div className="filter">
                        <input
                            type="text"
                            id="fname"
                            onChange={(event) => {
                                setLeague(event.target.value);
                            }}
                            name="firstname"
                            style={{ width: 370 }}
                            required
                            value={league}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="label-content">
                        <label>View</label>
                    </div>
                    <div className="filter">
                        <select
                            onChange={(event) => {
                                setView(event.target.value);
                            }}
                            style={{ width: 100, height: 30 }}
                            value={view}
                        >
                            <option value="Full Time">Full Time</option>
                            <option value="Half Time">Half Time</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="label-content">
                        <label>Time Interval</label>
                    </div>
                    <div className="filter">
                        <select
                            onChange={(event) => {
                                setTimeInterval(event.target.value);
                            }}
                            value={timeInterval}
                            id="country"
                            name="country"
                            style={{ width: 100, height: 30 }}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
}

export type GoalOption = "Home" | "Away";

export const options = (values: number[]) =>
    values &&
    values.map((value) => (
        <option key={value} value={value}>
            {value}
        </option>
    ));
