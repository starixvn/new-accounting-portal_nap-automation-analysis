import { shallow } from "enzyme";
import Header from "./Header";
import { cleanup } from "@testing-library/react";
import React from "react";
describe("Header Component", () => {
  const wrapper = shallow(<Header />);
  afterEach(cleanup);
  it("find IconButton", () => {
    expect(wrapper.find("#toggle-menu")).toHaveLength(1);
  });
  it("check IconButton when click", () => {
    expect(
      wrapper.find(".icon-button").simulate("click", { currentTarget: true })
    ).toHaveLength(1);
  });
  it("check MenuItem when click", () => {
    expect(
      wrapper.find(".menu-item").simulate("click", { currentTarget: true })
    ).toHaveLength(1);
  });
  it("check MenuItem when click", () => {
    expect(wrapper.find(".menu-item").text()).toBe("Logout");
  });
});
