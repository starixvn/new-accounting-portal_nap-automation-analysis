import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../../configureStore';
import GridViewMain from './GridViewMain';
import { ReportOption } from '../../Store/ISNOddsState';
import { Report } from '../../Models/ISNOdds';

describe('GridViewMain Component', () => {
  const mockStore = configureStore();
  const fakeMode: ReportOption = 'Goal';
  const fakeModeRedCard: ReportOption = 'Redcard';
  let fakeDrilldown = (from: string, to: string) =>{};
  const fakeReport: Report[] = [
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
  ];
  const fakeReportNull: Report[] = [];
  it('click drilldown Goal', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewMain mode={fakeMode} reports={fakeReport} drillDown={fakeDrilldown} />
      </Provider>,
    );
    const drilldown = wrapper.find('li');
    expect(drilldown.simulate('click')).toHaveLength(1);
  });
  it('click drilldown RedCard', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewMain mode={fakeModeRedCard} reports={fakeReport} drillDown={fakeDrilldown} />
      </Provider>,
    );
    const drilldown = wrapper.find('li');
    expect(drilldown.simulate('click')).toHaveLength(1);
  });
  it('null report', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <GridViewMain mode={fakeModeRedCard} reports={fakeReportNull} drillDown={fakeDrilldown} />
      </Provider>,
    );
    const drilldown = wrapper.find('td').text();
    expect(drilldown).toBe('No found data!');
  });
});
