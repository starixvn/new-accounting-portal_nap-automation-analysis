import { combineReducers, createStore } from 'redux';
import { ReportState } from './Feature/Report/Store/ReportState';
import reportReducer from './Feature/Report/Store/reportReducer';

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
