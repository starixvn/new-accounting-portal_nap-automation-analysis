import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import RedCardSelector from "./RedCardSelector";

describe("RedCardSelector Component", () => {
  it("render correct", () => {
    const { queryAllByText } = render(<RedCardSelector />);
    const text = queryAllByText("Red card");
    expect(text).not.toBeNull();
  });

  it("render home-redcard-select and test event change", () => {
    const wrapper = shallow(<RedCardSelector />);
    const selectElement = wrapper.find(".home-redcard-select");

    expect(selectElement.exists()).toEqual(true);
    expect(selectElement.simulate("change", { target: { value: 0 } })).toHaveLength(1);
    expect(selectElement.simulate("change", { target: { value: 3 } })).toHaveLength(1);
  });

  it("render away-redcard-select correct and test event change", () => {
    const wrapper = shallow(<RedCardSelector />);
    const selectElement = wrapper.find(".away-redcard-select");

    expect(selectElement.exists()).toEqual(true);
    expect(selectElement.simulate("change", { target: { value: 1 } })).toHaveLength(1);
    expect(selectElement.simulate("change", { target: { value: 10 } })).toHaveLength(1);
  });
});
