import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../../configureStore';
import GridViewDrilldown from './GridViewDrilldown';
import { ReportOption } from '../../Store/ISNOddsState';
import { ReportDetail } from '../../Models/ISNOddsDetail';

describe('GridViewMain Component', () => {
  const mockStore = configureStore();
  const fakeMode: ReportOption = 'Goal';
  const fakeModeRedCard: ReportOption = 'Redcard';
  const fakeReport: ReportDetail[] = [
    {
      index: 1,
      leagueName: 'A',
      matchName: '',
      minute: 1,
      second: 23,
      onlySecond: 0.35,
      beforeHDP: 1,
      beforeOU: 2,
      afterHDP: 1,
      afterOU: 2,
      diffHDP: 1,
      diffOU: 2,
    },
  ];
  const fakeReportNullIndex: ReportDetail[] = [
    {
      index: +'',
      leagueName: 'A',
      matchName: '',
      minute: 1,
      second: 23,
      onlySecond: 0.35,
      beforeHDP: 1,
      beforeOU: 2,
      afterHDP: 1,
      afterOU: 2,
      diffHDP: 1,
      diffOU: 2,
    },
  ];
  const fakeReportNull: ReportDetail[] = [];
  it('click drilldown Goal', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewDrilldown mode={fakeMode} reportDetails={fakeReport} />
      </Provider>,
    );
    const drilldown = wrapper.find('td').at(0).text();
    expect(drilldown).toBe('1');
  });
  it('click drilldown RedCard', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewDrilldown mode={fakeModeRedCard} reportDetails={fakeReport} />
      </Provider>,
    );
    const drilldown = wrapper.find('td').at(0).text();
    expect(drilldown).toBe('1');
  });
  it('null report', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewDrilldown mode={fakeModeRedCard} reportDetails={fakeReportNull} />
      </Provider>,
    );
    const drilldown = wrapper.find('td').text();
    expect(drilldown).toBe('Not found data!');
  });
  it('null report', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewDrilldown mode={fakeModeRedCard} reportDetails={fakeReportNullIndex} />
      </Provider>,
    );
    const drilldown = wrapper.find('td').at(0).text();
    expect(drilldown).toBe('0');
  });
});
