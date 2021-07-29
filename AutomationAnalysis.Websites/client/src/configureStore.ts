import { combineReducers, createStore } from 'redux';
import { ReportState } from './Feature/Isn-odds/Store/Isn-odds-State';
import reportReducer from './Feature/Isn-odds/Store/Isn-odds-Reducer';

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
