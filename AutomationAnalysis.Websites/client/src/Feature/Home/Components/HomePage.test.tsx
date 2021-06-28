import { shallow } from "enzyme";
import HomePage from "./HomePage";
import React from "react";
describe("HomePage Component", () => {
  const wrapper = shallow(<HomePage />);
  it("get Test Label", () => {
    const text = wrapper.find(".header h1").text();
    expect(text).toBe("Welcome to Automation Analysis System");
  });
});
