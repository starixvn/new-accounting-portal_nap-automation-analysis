import { mount } from 'enzyme';
import { Breadcrumb } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import { getReportDetails } from '../Store/ISNOddsActions';
import BreadcrumbFilter from './BreadcrumbFilter';

describe('BreadcrumbFilter compoment', () => {
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <BreadcrumbFilter />
    </Provider>,
  );
  it('render correct', () => {
    expect(wrapper.find(Breadcrumb).exists()).toEqual(true);
  });
  it('click  correct', () => {
    mockStore.dispatch(
      getReportDetails('0', '5', [
        {
          index: 1,
          leagueName: 'AC',
          matchName: 'MC',
          minute: 4,
          second: 4,
          onlySecond: 2,
          beforeHDP: 3,
          beforeOU: 4,
          afterHDP: 7,
          afterOU: 5,
          diffHDP: 3,
          diffOU: 54,
        },
      ]),
    );
    const item = wrapper.find('a');

    expect(item.simulate('click')).toHaveLength(1);
  });
});
