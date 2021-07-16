import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import './DateRange.css';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../configureStore';
import { selectFromDate, selectToDate } from '../../Feature/Report/Store/ReportActions';

export default function DateRange() {
  const dispatch = useDispatch();
  const fromDate = useSelector((state: ApplicationState) => state.report.fromDate);
  const toDate = useSelector((state: ApplicationState) => state.report.toDate);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="d-inline-block">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          value={fromDate}
          onChange={(date) => dispatch(selectFromDate(date as Date))}
          InputProps={{
            id: 'from-date',
            disableUnderline: true,
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <span className="divider">-</span>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          InputProps={{
            id: 'to-date',
            disableUnderline: true,
          }}
          value={toDate}
          onChange={(date) => dispatch(selectToDate(date as Date))}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
