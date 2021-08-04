import { mount } from 'enzyme';
import { Table } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import { selectReportOption } from '../Store/ISNOddsActions';
import TeamTypeGoalOrRedCardSelector from './TeamTypeGoalOrRedCardSelector';

describe('ScoreSelector Component', () => {
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <TeamTypeGoalOrRedCardSelector />
    </Provider>,
  );

  it('render correct', () => {
    expect(wrapper.find(Table).exists()).toBe(true);
  });

  it('render TeamTypeGoalOrRedCardSelector correct and test event change when report option goal', () => {
    const selectGoalElement = wrapper.find('select').at(0);
    const selectScoreOrRedCardHomeElement = wrapper.find('select').at(1);
    const selectScoreOrRedCardAwayElement = wrapper.find('select').at(2);

    expect(selectGoalElement.exists()).toEqual(true);
    expect(selectGoalElement.simulate('change', { target: { value: 'Home' } })).toHaveLength(1);
    expect(selectGoalElement.simulate('change', { target: { value: 'Away' } })).toHaveLength(1);

    expect(selectScoreOrRedCardHomeElement.simulate('change', { target: { value: 1 } })).toHaveLength(1);
    expect(selectScoreOrRedCardAwayElement.simulate('change', { target: { value: 1 } })).toHaveLength(1);
  });

  it('render TeamTypeGoalOrRedCardSelector correct and test event change when report option redcard', () => {
    mockStore.dispatch(selectReportOption('Redcard'));
    const selectScoreOrRedCardHomeElement = wrapper.find('select').at(1);
    const selectScoreOrRedCardAwayElement = wrapper.find('select').at(2);

    expect(selectScoreOrRedCardHomeElement.simulate('change', { target: { value: 1 } })).toHaveLength(1);
    expect(selectScoreOrRedCardAwayElement.simulate('change', { target: { value: 1 } })).toHaveLength(1);
  });
});
