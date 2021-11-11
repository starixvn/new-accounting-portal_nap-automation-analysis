import { shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import RouteFeature from './RouteFeature';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useRouteMatch: () => ({ url: '/app' }),
  };
});

describe('Route snapshots Test', () => {
  it('Route Feature', () => {
    const component = shallow(<RouteFeature />);
    expect(EnzymeToJson(component)).toMatchSnapshot();
  });
});
