import { shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage Component', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NotFoundPage/>
    );
    expect(EnzymeToJson(tree)).toMatchSnapshot();
  });
});
