import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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
    setSelectedToDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="d-inline-block">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          value={selectedFromDate}
          InputProps={{
            id: "from-date",
            disableUnderline: true,
          }}
          onChange={handleFromDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <span className="divider">-</span>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          InputProps={{
            id: "to-date",
            disableUnderline: true,
          }}
          value={selectedToDate}
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
