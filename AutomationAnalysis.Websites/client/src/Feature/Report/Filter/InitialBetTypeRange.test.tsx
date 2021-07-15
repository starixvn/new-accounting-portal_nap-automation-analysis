import InitialBetType from "./InitialBetTypeRange";
import { render, fireEvent } from "@testing-library/react";

describe("InitialBetType Component", () => {
  let wrapper: any;

  it("check value fromHDP-input", () => {
    wrapper = render(<InitialBetType />);
    const input = wrapper.getByLabelText("fromHDP-input");
    fireEvent.change(input, { target: { value: "0.23" } });
    expect(input.value).toBe("0.23");
  });
  it("check value toHDP-input", () => {
    wrapper = render(<InitialBetType />);
    const input = wrapper.getByLabelText("toHDP-input");
    fireEvent.change(input, { target: { value: "0.23" } });
    expect(input.value).toBe("0.23");
  });
  it("check value fromOU-input", () => {
    wrapper = render(<InitialBetType />);
    const input = wrapper.getByLabelText("fromOU-input");
    fireEvent.change(input, { target: { value: "0.23" } });
    expect(input.value).toBe("0.23");
  });
  it("check value toOU-input", () => {
    wrapper = render(<InitialBetType />);
    const input = wrapper.getByLabelText("toOU-input");
    fireEvent.change(input, { target: { value: "0.23" } });
    expect(input.value).toBe("0.23");
  });
});
