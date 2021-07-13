import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { toast } from "react-toastify";
import "./DateRange.css";

export default function DateRange() {
    const yesterDay = new Date(Date.now());
    yesterDay.setDate(yesterDay.getDate() - 1);
    const [selectedFromDate, setSelectedFromDate] = React.useState(yesterDay);
    const [selectedToDate, setSelectedToDate] = React.useState(yesterDay);
    const handleFromDateChange = (date: any) => {
        setSelectedFromDate(date);
    };
    const handleToDateChange = (date: any) => {
        setSelectedFromDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    value={selectedFromDate}
                    inputProps={{
                        id: "from-date",
                    }}
                    onChange={handleFromDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date",
                    }}
                />
                <span>-</span>
                <KeyboardDatePicker
                    style={{ paddingLeft: 15 }}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    inputProps={{
                        id: "to-date",
                    }}
                    value={selectedToDate}
                    onChange={handleToDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date",
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
