import { KeyboardDatePicker } from "@material-ui/pickers";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../configureStore";
import DateRange from "./DateRange";

describe("DateRange Component", () => {
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <DateRange />
    </Provider>
  );

  it("render and test event change", () => {
    const selectElementFromDate = wrapper.find("input").at(0);
    const selectElementToDate = wrapper.find("input").at(1);

    expect(selectElementFromDate.simulate("change", { target: { value: "07/13/2021" } })).toHaveLength(1);
    expect(selectElementToDate.simulate("change", { target: { value: "07/13/2021" } })).toHaveLength(1);
  });
});
