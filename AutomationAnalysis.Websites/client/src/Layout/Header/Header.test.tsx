import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe("Header Component", () => {
  let wrapper: any;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("find IconButton", () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find("#toggle-menu")).toHaveLength(1);
  });
  it("check IconButton when click", () => {
    wrapper = shallow(<Header />);
    expect(
      wrapper.find(".icon-button").simulate("click", { currentTarget: true })
    ).toHaveLength(1);
  });
  it("Redirects to correct URL on click", () => {
    wrapper = shallow(<Header />);
    wrapper.find(".menu-item").simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith("/app/login");
  });
  it("check MenuItem when click", () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find(".menu-item").text()).toBe("Logout");
  });
});
