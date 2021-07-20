import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import Filter from "./Filter";
import RedCardSelector from "./RedCardSelector";
import ScoreSelector from "./ScoreSelector";
import BreadcrumbFilter from "./BreadcrumbFilter";
import configureStore from "../../../configureStore";
import { Provider } from "react-redux";

describe("RedCardSelector Component", () => {
  const mockStore = configureStore();

  const wrapper = mount(
    <Provider store={mockStore}>
      <Filter />
    </Provider>
  );

  it("render subcompoment correct", () => {
    expect(wrapper.find(RedCardSelector).exists()).toEqual(true);
    expect(wrapper.find(ScoreSelector).exists()).toEqual(true);
    expect(wrapper.find(BreadcrumbFilter).exists()).toEqual(true);
  });

  it("button click correct", () => {
    const buttonScore = wrapper.find("button").at(0);
    const buttonRedcard = wrapper.find("button").at(1);
    const buttonQuery = wrapper.find("button").at(2);

    expect(buttonScore.simulate("click")).toHaveLength(1);
    expect(buttonRedcard.simulate("click")).toHaveLength(1);
    expect(buttonQuery.simulate("click")).toHaveLength(1);
  });

  it("element change callback correct", () => {
    const inputLeague = wrapper.find("input").at(2);
    const selectView = wrapper.find("select").at(0);
    const selectInterval = wrapper.find("select").at(1);

    expect(inputLeague.simulate("change", { target: { value: "C1" } })).toHaveLength(1);
    expect(selectView.simulate("change", { target: { value: "Full Time" } })).toHaveLength(1);
    expect(selectInterval.simulate("change", { target: { value: 5 } })).toHaveLength(1);
  });
});
