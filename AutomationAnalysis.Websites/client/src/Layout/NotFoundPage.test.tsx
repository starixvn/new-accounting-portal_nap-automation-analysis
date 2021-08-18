import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('Layout Component', () => {
  it('renders correctly', () => {
    const tree = shallow(<NotFoundPage />);
    expect(tree.find('h2').text()).toEqual('404 Not Found');
  });
});
