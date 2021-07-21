import { shallow } from 'enzyme';
import MenuLogout from './MenuLogout';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  };
});

describe('Header Component', () => {
  let wrapper: any;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Redirects to correct URL on click', () => {
    wrapper = shallow(<MenuLogout />);
    wrapper.find('.menu-item').simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/app/redirect-login');
  });
  it('check onClose', () => {
    wrapper = shallow(<MenuLogout />);
    expect(wrapper.find('#primary-search-account-menu').simulate('close')).toHaveLength(1);
  });
});
