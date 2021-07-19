import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import Layout from './Layout';

describe('Layout Component', () => {
  it('renders correctly', () => {
    const tree = mount(
      <Layout>
        <p>Test content</p>
      </Layout>,
    );
    expect(EnzymeToJson(tree)).toMatchSnapshot();
  });
});
