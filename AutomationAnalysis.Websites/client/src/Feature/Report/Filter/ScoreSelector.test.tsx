import { mount } from "enzyme";
import { Table } from "react-bootstrap";
import { Provider, useDispatch, useSelector } from "react-redux";
import configureStore from "../../../configureStore";
import ScoreSelector from "./ScoreSelector";

describe("ScoreSelector Component", () => {
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <ScoreSelector />
    </Provider>
  );

  it("render correct", () => {
    expect(wrapper.find(Table).exists()).toBe(true);
  });

  it("render goal-select correct and test event change", () => {
    const selectGoalElement = wrapper.find("select").at(0);
    const selectScoreHomeElement = wrapper.find("select").at(1);
    const selectScoreAwayElement = wrapper.find("select").at(2);
    // const selectAwayElement = wrapper.find("select").at(1);

    expect(selectGoalElement.exists()).toEqual(true);
    expect(selectGoalElement.simulate("change", { target: { value: "Home" } })).toHaveLength(1);
    expect(selectGoalElement.simulate("change", { target: { value: "Away" } })).toHaveLength(1);
    expect(selectScoreHomeElement.exists()).toEqual(true);
    expect(selectScoreHomeElement.simulate("change", { target: { value: 1 } })).toHaveLength(1);
    expect(selectScoreAwayElement.exists()).toEqual(true);
    expect(selectScoreAwayElement.simulate("change", { target: { value: 1 } })).toHaveLength(1);
  });
});
