import { mount } from 'enzyme';
import { Breadcrumb } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import BreadcrumbFilter from './BreadcrumbFilter';
import reportApi from '../../../Api/reportApi';
import { getReportDetails, getReports } from '../Store/ISNOddsActions';

jest.mock('../../../Api/reportApi');

describe('BreadcrumbFilter compoment', () => {
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
  it('click button download correct', async () => {
    mockStore.dispatch(getReports([]));

    const button = wrapper.find('button');
    const getReportExcelMock = jest.spyOn(reportApi, 'getReportExcel').mockResolvedValue(new Blob());
    button.simulate('click');
    expect(getReportExcelMock).toHaveBeenCalled();
  });

  it('click correct goback mainreport', () => {
    mockStore.dispatch(getReportDetails('0', '5', []));
    const item = wrapper.find('a');

    expect(item.simulate('click')).toHaveLength(1);
  });
});
