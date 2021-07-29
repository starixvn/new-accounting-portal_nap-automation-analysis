import { mount } from 'enzyme';
import { Breadcrumb } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
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
});
