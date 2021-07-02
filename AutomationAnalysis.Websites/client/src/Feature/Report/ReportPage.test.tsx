import { shallow } from "enzyme";
import ReportPage from "./ReportPage";
import React from "react";
describe("HomePage Component", () => {
  const wrapper = shallow(<ReportPage />);
  it("get Test Label", () => {
    const text = wrapper.find(".header h1").text();
    expect(text).toBe("ReportPage");
  });
});
