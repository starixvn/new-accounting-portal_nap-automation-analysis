import { mount } from 'enzyme';
import ReactRedux, { Provider } from 'react-redux';
import { toast } from 'react-toastify';
// import { act } from '@testing-library/react';
import Filter from './Filter';
import RedCardSelector from './CurrentRedCardOrGoalSelector';
import ScoreSelector from './TeamTypeGoalOrRedCardSelector';
import configureStore from '../../../configureStore';
import reportApi from '../../../Api/reportApi';
import { selectFromDate, selectReportOption, selectToDate } from '../Store/ISNOddsActions';

jest.mock('../../../Api/reportApi');
describe('RedCardSelector Component', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <Filter />
    </Provider>,
  );

  it('render subcompoment correct', () => {
    expect(wrapper.find(RedCardSelector).exists()).toEqual(true);
    expect(wrapper.find(ScoreSelector).exists()).toEqual(true);
  });

  it('button click correct', () => {
    const buttonScore = wrapper.find('button').at(0);
    const buttonRedcard = wrapper.find('button').at(1);
    const buttonQuery = wrapper.find('button').at(4);

    expect(buttonScore.simulate('click')).toHaveLength(1);
    expect(buttonRedcard.simulate('click')).toHaveLength(1);
    expect(buttonQuery.simulate('click')).toHaveLength(1);
  });

  it('button goal click correct', () => {
    mockStore.dispatch(selectReportOption('Redcard'));
    const buttonGoal = wrapper.find('button').at(0);
    expect(buttonGoal.simulate('click')).toHaveLength(1);
  });

  it('element change callback correct', () => {
    const inputLeague = wrapper.find('input').at(2);
    const selectView = wrapper.find('select').at(0);
    const selectInterval = wrapper.find('select').at(1);

    expect(inputLeague.simulate('change', { target: { value: '' } })).toHaveLength(1);
    expect(selectView.simulate('change', { target: { value: 'Full Time' } })).toHaveLength(1);
    expect(selectInterval.simulate('change', { target: { value: 5 } })).toHaveLength(1);
  });

  it('submit query error range date', () => {
    mockStore.dispatch(selectFromDate(new Date('2019-07-24')));
    mockStore.dispatch(selectToDate(new Date('2021-07-25')));
    const spy = jest.spyOn(toast, 'error');
    const buttonQuery = wrapper.find('button').at(4);
    buttonQuery.simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('submit query correct get reportDate', async () => {
    mockStore.dispatch(selectFromDate(new Date('2021-07-24')));
    mockStore.dispatch(selectToDate(new Date('2021-07-25')));
    const buttonQuery = wrapper.find('button').at(4);
    const getReportsSpy = jest.spyOn(reportApi, 'getReports').mockResolvedValue([]);
    buttonQuery.simulate('click');

    expect(getReportsSpy).toHaveBeenCalled();
  });
});
