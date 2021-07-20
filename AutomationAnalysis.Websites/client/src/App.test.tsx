import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import App from "./App";
import Feature from "./Feature/RouteFeature";

describe("routes using array of routers", () => {
  let path: { [x: string]: any };
  beforeAll(() => {
    const component = shallow(<App />);
    path = component.find(Route).reduce((pathMap: any, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  it("should show Home component for / router (getting array of routes)", () => {
    expect(path["/app"]).toBe(Feature);
  });
});
