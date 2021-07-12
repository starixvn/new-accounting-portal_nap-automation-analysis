import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { toast } from "react-toastify";
import "./DateRange.css";

export default function DateRange() {
  const yesterDay = new Date(Date.now());
  yesterDay.setDate(yesterDay.getDate() - 1);
  const [selectedFromDate, setSelectedFromDate] = React.useState(yesterDay);
  const [selectedToDate, setSelectedToDate] = React.useState(yesterDay);
  const handleFromDateChange = (date: any) => {
    if (
      selectedToDate.getDate() - date.getDate() > 180 ||
      date > yesterDay ||
      date > selectedToDate
    ) {
      toast.error("Please choose again Date Range!");
    } else {
      setSelectedFromDate(date);
    }
  };
  const handleToDateChange = (date: any) => {
    if (
      date.getDate() - selectedFromDate.getDate() > 180 ||
      date > yesterDay ||
      date < selectedFromDate
    ) {
      toast.error("Please choose again Date Range!");
    } else {
      setSelectedToDate(date);
    }
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="from-date"
          value={selectedFromDate}
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
          id="to-date"
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
