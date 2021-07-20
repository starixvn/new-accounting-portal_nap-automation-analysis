import { shallow } from "enzyme";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import BreadcrumbFilter from "./BreadcrumbFilter";

describe("BreadcrumbFilter compoment", () => {
  it("render correct", () => {
    const compoment = shallow(<BreadcrumbFilter />);
    expect(compoment.find(Breadcrumb).exists()).toEqual(true);
  });
});
