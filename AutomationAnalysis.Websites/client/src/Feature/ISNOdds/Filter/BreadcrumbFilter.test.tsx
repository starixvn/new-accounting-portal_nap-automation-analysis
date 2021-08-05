import { mount } from 'enzyme';
import { Breadcrumb } from 'react-bootstrap';
import { Provider } from 'react-redux';
import FileSaver from 'file-saver';
import configureStore from '../../../configureStore';
import { getReportDetails } from '../Store/ISNOddsActions';
import BreadcrumbFilter from './BreadcrumbFilter';
import reportApi from '../../../Api/reportApi';

jest.mock('../../../Api/reportApi');
jest.mock('file-saver', () => ({ saveAs: jest.fn() }));

describe('BreadcrumbFilter compoment', () => {
  beforeAll(() => {
    (reportApi.getReportExcel as jest.Mock).mockResolvedValue(new Blob());
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <BreadcrumbFilter />
    </Provider>,
  );
  it('render correct', () => {
    expect(wrapper.find(Breadcrumb).exists()).toEqual(true);
  });
  it('click  correct', () => {
    mockStore.dispatch(
      getReportDetails('0', '5', [
        {
          index: 1,
          leagueName: 'AC',
          matchName: 'MC',
          minute: 4,
          second: 4,
          onlySecond: 2,
          beforeHDP: 3,
          beforeOU: 4,
          afterHDP: 7,
          afterOU: 5,
          diffHDP: 3,
          diffOU: 54,
        },
      ]),
    );
    const item = wrapper.find('a');
    const button = wrapper.find('button');

    expect(button.simulate('click')).toHaveLength(1);
    button.simulate('click');
    expect(reportApi.getReportExcel).toBeCalled();
    // expect(FileSaver.saveAs).toHaveBeenCalled();
    expect(item.simulate('click')).toHaveLength(1);
  });
});
