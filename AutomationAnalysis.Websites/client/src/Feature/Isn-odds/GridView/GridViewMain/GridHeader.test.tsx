import { shallow } from 'enzyme';
import HeaderForGoal from './HeaderForGoal';
import HeaderForRedCard from './HeaderForRedCard';

describe('Header compoment', () => {
  it('render header for goal correct', () => {
    const wrapper = shallow(<HeaderForGoal />);
    expect(wrapper.find('tr').exists()).toBe(true);
  });

  it('render header for redcard correct', () => {
    const wrapper = shallow(<HeaderForRedCard />);
    expect(wrapper.find('tr').exists()).toBe(true);
  });
});
