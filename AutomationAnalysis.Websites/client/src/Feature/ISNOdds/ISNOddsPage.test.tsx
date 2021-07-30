import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import reportApi from '../../Api/reportApi';
import processReportDetailsData from '../../Utils/HelpersUtility';
import configureStore from '../../configureStore';
import Filter from './Filter/Filter';
import GridViewMain from './GridView/GridViewMain/GridViewMain';
import ReportPage from './ISNOddsPage';
import { getReportDetails, getReports } from './Store/ISNOddsActions';
import GridViewDrilldown from './GridView/GridViewDrilldown/GridViewDrilldown';

jest.mock('../../Api/reportApi');
jest.mock('../../Utils/HelpersUtility');

describe('ReportPage Component', () => {
  const mockStore = configureStore();
  beforeAll(() => {
    (reportApi.getReportDetails as jest.Mock).mockReturnValue([]);
    (processReportDetailsData as jest.Mock).mockImplementation(() => []);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('render correct', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <ReportPage />
      </Provider>,
    );
    expect(wrapper.find(Filter).exists()).toEqual(true);
  });

  it('render gridMain correct', () => {
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
    const gridMain = wrapper.find(GridViewMain);
    gridMain.find('li').simulate('click');
    expect(reportApi.getReportDetails).toHaveBeenCalledTimes(1);
  });
  it('render griddrilldown correct', () => {
    mockStore.dispatch(
      getReportDetails('0', '5', [
        {
          leagueName: 'string',
          matchName: 'string',
          beforeHDP: 1,
          beforeOU: 2,
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
    const gridDrilldown = wrapper.find(GridViewDrilldown);
    expect(gridDrilldown.exists()).toEqual(true);
  });
});
