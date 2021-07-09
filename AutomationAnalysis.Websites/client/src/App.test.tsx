import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Route } from "react-router-dom";
import Feature from "./Feature/RouteFeature";

describe("routes using array of routers", () => {
  let pathMap: { [x: string]: any };
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap: any, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  it("should show Home component for / router (getting array of routes)", () => {
    expect(pathMap["/app"]).toBe(Feature);
  });
});
