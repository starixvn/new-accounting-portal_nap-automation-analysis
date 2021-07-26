import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import ReportPage from './ReportPage';
import { getReports } from './Store/ReportActions';

describe('ReportPage Component', () => {
  const mockStore = configureStore();

  it('render correct', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <ReportPage />
      </Provider>,
    );
    expect(wrapper.find(Filter).exists()).toEqual(true);
    expect(wrapper.find(GridView).exists()).toEqual(false);
  });

  it('render gridview correct', () => {
    mockStore.dispatch(
      getReports([
        {
          fromTime: '0.00',
          toTime: '5.00',
          beforeHDP: 1,
          beforeOU: 2,
          noOfLeague: 2,
          noOfMatch: 2,
          afterHDP: 2,
          afterOU: 2,
          differenceHDP: 2,
          differenceOU: 2,
        },
      ]),
    );
    const wrapper = mount(
      <Provider store={mockStore}>
        <ReportPage />
      </Provider>,
    );
    expect(wrapper.find(GridView).exists()).toEqual(true);
  });
});
