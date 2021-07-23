import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import Filter from './Filter/Filter';
import ReportPage from './ReportPage';

describe('ReportPage Component', () => {
  const mockStore = configureStore();
  const wrapper = mount(
    <Provider store={mockStore}>
      <ReportPage />
    </Provider>,
  );

  it('render correct', () => {
    expect(wrapper.find(Filter).exists()).toEqual(true);
  });
});
