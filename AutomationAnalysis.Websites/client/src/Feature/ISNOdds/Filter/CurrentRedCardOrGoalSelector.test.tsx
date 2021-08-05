import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import { selectReportOption } from '../Store/ISNOddsActions';
import CurrentRedCardOrGoalSelector from './CurrentRedCardOrGoalSelector';

describe('RedCardSelector Component', () => {
  const mockStore = configureStore();
  const wrapper = mount(
    <Provider store={mockStore}>
      <CurrentRedCardOrGoalSelector />
    </Provider>,
  );

  it('render home-goal-select and test event change', () => {
    const selectHomeElement = wrapper.find('select').at(0);
    const selectAwayElement = wrapper.find('select').at(1);

    expect(selectHomeElement).not.toBeNull();
    expect(selectAwayElement).not.toBeNull();
    expect(selectHomeElement.simulate('change', { target: { value: 0 } })).toHaveLength(1);
    expect(selectAwayElement.simulate('change', { target: { value: 0 } })).toHaveLength(1);
  });

  it('render home-redcard-select and test event change', () => {
    mockStore.dispatch(selectReportOption('Redcard'));
    const selectHomeElement = wrapper.find('select').at(0);
    const selectAwayElement = wrapper.find('select').at(1);
    expect(selectHomeElement.simulate('change', { target: { value: 0 } })).toHaveLength(1);
    expect(selectAwayElement.simulate('change', { target: { value: 0 } })).toHaveLength(1);
  });
});
