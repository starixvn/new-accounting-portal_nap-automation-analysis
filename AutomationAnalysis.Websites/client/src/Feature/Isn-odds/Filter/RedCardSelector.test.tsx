import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import RedCardSelector from './RedCardSelector';

describe('RedCardSelector Component', () => {
  const mockStore = configureStore();
  const wrapper = mount(
    <Provider store={mockStore}>
      <RedCardSelector />
    </Provider>,
  );

  it('render home-redcard-select and test event change', () => {
    const selectHomeElement = wrapper.find('select').at(0);
    const selectAwayElement = wrapper.find('select').at(1);

    expect(selectHomeElement).not.toBeNull();
    expect(selectAwayElement).not.toBeNull();
    expect(selectHomeElement.simulate('change', { target: { value: 0 } })).toHaveLength(1);
    expect(selectAwayElement.simulate('change', { target: { value: 0 } })).toHaveLength(1);
  });
});
