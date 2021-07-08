import Layout from "./Layout";
import React from "react";
import { mount } from "enzyme";
import EnzymeToJson from "enzyme-to-json";

describe("Layout Component", () => {
  it("renders correctly", () => {
    const tree = mount(
      <Layout>
        <p>Test content</p>
      </Layout>
    );
    expect(EnzymeToJson(tree)).toMatchSnapshot();
  });
});
