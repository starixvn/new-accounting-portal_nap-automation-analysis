import RouteFeature from "./RouteFeature";
import React from "react";
import { shallow, mount } from "enzyme";
import EnzymeToJson from "enzyme-to-json";
import HomePage from "./Home/HomePage";
import ReportPage from "./Report/ReportPage";
import RedirectToLogin from "./RedirectToLogin/RedirectToLogin";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
jest.mock("react-router-dom", () => ({
    useRouteMatch: () => ({ url: '/app' }),
}));
describe("Route snapshots Test", () => {
    it("Route Feature", () => {
        const component = shallow(<RouteFeature />);
        expect(EnzymeToJson(component)).toMatchSnapshot();
    });
  });
