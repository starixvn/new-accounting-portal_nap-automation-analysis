import { combineReducers, createStore } from 'redux';
import { ReportState } from './Feature/ISNOdds/Store/ISNOddsState';
import reportReducer from './Feature/ISNOdds/Store/ISNOddsReducer';

export interface ApplicationState {
  report: ReportState;
}

const reducers = {
  report: reportReducer,
};

export default function configureStore() {
  const rootReducers = combineReducers({
    ...reducers,
  });

  return createStore(rootReducers, undefined);
}
