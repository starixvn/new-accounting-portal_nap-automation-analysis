import { shallow, mount } from 'enzyme';
import { MenuHeader, MenuData } from '../../Models/MenuHeader';
import headerApi from '../../Api/headerApi';
import Header from './Header';
import { act } from '@testing-library/react';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('Header Component', () => {
  let wrapper: any;
  beforeEach(() => {
    const fakeMenus: MenuData[] = [
      { name: 'home', url: '/app' },
      { name: 'report', url: '/app/report' },
    ];
    const fakeHeader: MenuHeader = {
      user: 'sa',
      menus: fakeMenus,
    };
    const fakePromise = Promise.resolve(fakeHeader);
    jest.spyOn(headerApi, 'getMenu').mockImplementation(() => fakePromise);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('check IconButton when click', () => {
    wrapper = shallow(<Header />);
    expect(
      wrapper.find('.icon-button').simulate('click', { currentTarget: true }),
    ).toHaveLength(1);
  });
  it('App loads with initial state of 0', async () => {
    const component = mount(<Header />);
    await act(
      () => new Promise<void>((resolve) => {
        setImmediate(() => {
          component.update();
          resolve();
        });
      }),
    );
  });
});
