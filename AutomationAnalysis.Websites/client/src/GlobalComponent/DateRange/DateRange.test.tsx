import DateRange from './DateRange';
import { mount } from 'enzyme';

describe('DateRange Component', () => {
  it('render home-redcard-select and test event change', () => {
    const wrapper = mount(<DateRange />);
    const selectElementFromDate = wrapper.find('#from-date');
    const selectElementToDate = wrapper.find('#to-date');
    expect(selectElementFromDate.exists()).toEqual(true);
    expect(selectElementFromDate.simulate('change', { target: { value: '07/13/2021' } })).toHaveLength(1);
    expect(selectElementToDate.exists()).toEqual(true);
    expect(selectElementToDate.simulate('change', { target: { value: '07/13/2021' } })).toHaveLength(1);
  });
});
