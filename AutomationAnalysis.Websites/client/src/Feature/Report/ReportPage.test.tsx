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
          From: '0.00',
          To: '5.00',
          BeforeHDP: 1,
          BeforeOU: 2,
          NumberOfLeague: 2,
          NumberOfMatch: 2,
          AfterHDP: 2,
          AfterOU: 2,
          DiffHDP: 2,
          DiffOU: 2,
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
