import { shallow } from 'enzyme';
import HeaderForGoalDrilldown from './HeaderForGoalDrilldown';
import HeaderForRedCardDrilldown from './HeaderForRedCardDrilldown';

describe('Header compoment', () => {
  it('render header for goal correct', () => {
    const wrapper = shallow(<HeaderForGoalDrilldown />);
    expect(wrapper.find('tr').exists()).toBe(true);
  });

  it('render header for redcard correct', () => {
    const wrapper = shallow(<HeaderForRedCardDrilldown />);
    expect(wrapper.find('tr').exists()).toBe(true);
  });
});
