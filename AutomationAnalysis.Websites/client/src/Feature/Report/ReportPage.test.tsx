import { shallow } from 'enzyme';
import Filter from './Filter/Filter';
import ReportPage from './ReportPage';

describe('ReportPage Component', () => {
  const wrapper = shallow(<ReportPage />);

  it('render correct', () => {
    const compoment = wrapper.find(Filter);
    expect(compoment.exists()).toEqual(true);
  });
});
