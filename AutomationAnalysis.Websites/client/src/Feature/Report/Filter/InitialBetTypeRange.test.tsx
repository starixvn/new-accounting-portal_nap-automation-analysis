import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import InitialBetType from './InitialBetTypeRange';

describe('InitialBetType Component', () => {
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <InitialBetType />
    </Provider>,
  );

  it('check value fromHDP-input', () => {
    const input = wrapper.find('input').at(0);
    expect(input.simulate('change', { target: { value: 0.01 } })).toHaveLength(1);
  });

  it('check value toHDP-input', () => {
    const input = wrapper.find('input').at(1);
    expect(input.simulate('change', { target: { value: 0.01 } })).toHaveLength(1);
  });

  it('check value fromOU-input', () => {
    const input = wrapper.find('input').at(2);
    expect(input.simulate('change', { target: { value: 0.01 } })).toHaveLength(1);
  });

  it('check value toOU-input', () => {
    const input = wrapper.find('input').at(3);
    expect(input.simulate('change', { target: { value: 0.01 } })).toHaveLength(1);
  });
});
