import { shallow } from 'enzyme';
import GridView from './GridView';

describe('GridView Component', () => {
  it('render correct', () => {
    const mockHead = (
      <tr>
        <td>A</td>
      </tr>
    );
    const mockBody = (
      <tr>
        <td>B</td>
      </tr>
    );
    const wrapper = shallow(<GridView head={mockHead} body={mockBody} />);
    expect(wrapper.find('tbody').exists()).toEqual(true);
  });
});
