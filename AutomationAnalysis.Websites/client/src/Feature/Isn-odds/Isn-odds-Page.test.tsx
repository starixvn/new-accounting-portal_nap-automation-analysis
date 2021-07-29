import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import Filter from './Filter/Filter';
import GridView from './GridView/GridView';
import ReportPage from './Isn-odds-Page';
import { getReports } from './Store/Isn-odds-Actions';

describe('ReportPage Component', () => {
  const mockStore = configureStore();

  it('render correct', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <ReportPage />
      </Provider>,
    );
    expect(wrapper.find(Filter).exists()).toEqual(true);
  });

  it('render gridview correct', () => {
    mockStore.dispatch(
      getReports([
        {
          from: '0.00',
          to: '5.00',
          beforeHDP: 1,
          beforeOU: 2,
          numberOfLeague: 2,
          numberOfMatch: 2,
          afterHDP: 2,
          afterOU: 2,
          diffHDP: 2,
          diffOU: 2,
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
