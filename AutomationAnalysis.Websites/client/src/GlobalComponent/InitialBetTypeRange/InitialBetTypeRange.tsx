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
                    <th colSpan={2} style={{ backgroundColor: "#1874CD" }}>
                        Initial HDP
                    </th>
                    <th colSpan={2} style={{ backgroundColor: "#1874CD" }}>
                        Initial OU
                    </th>
                </tr>
                <tr>
                    <th style={{ backgroundColor: "#C1FFC1" }}>From</th>
                    <th style={{ backgroundColor: "#EECBAD" }}>To</th>
                    <th style={{ backgroundColor: "#C1FFC1" }}>From</th>
                    <th style={{ backgroundColor: "#EECBAD" }}>To</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="number"
                            datatype="float"
                            step="0.01"
                            id="fname"
                            name="firstname"
                            style={{ width: 100 }}
                            required
                            value={fromHDP}
                            onChange={(event: any) => {
                                setFromHDP(event.target.value);
                            }}
                        />
                    </td>
                    <td>
                        <input
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
                        />
                    </td>
                    <td>
                        <input
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
                        />
                    </td>
                    <td>
                        <input
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
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
