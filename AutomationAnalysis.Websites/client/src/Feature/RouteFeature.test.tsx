import RouteFeature from "./RouteFeature";
import { shallow } from "enzyme";
import EnzymeToJson from "enzyme-to-json";
jest.mock("react-router-dom", () => ({
    useRouteMatch: () => ({ url: '/app' }),
}));
describe("Route snapshots Test", () => {
    it("Route Feature", () => {
        const component = shallow(<RouteFeature />);
        expect(EnzymeToJson(component)).toMatchSnapshot();
    });
});
