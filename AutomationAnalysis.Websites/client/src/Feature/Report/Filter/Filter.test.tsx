import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Filter from "./Filter";
import RedCardSelector from "./RedCardSelector";
import ScoreSelector from "./ScoreSelector";
import BreadcrumbFilter from "./BreadcrumbFilter";

describe("RedCardSelector Component", () => {
    it("render correct", () => {
        const { queryAllByText } = render(<Filter />);
        const text = queryAllByText("ISN Odds");
        expect(text).not.toBeNull();
    });

    it("render subcompoment correct", () => {
        const wrapper = shallow(<Filter />);

        expect(wrapper.find(RedCardSelector).exists()).toEqual(true);
        expect(wrapper.find(ScoreSelector).exists()).toEqual(true);
        expect(wrapper.find(BreadcrumbFilter).exists()).toEqual(true);
    });

    it("goal-button click correct", () => {
        const wrapper = shallow(<Filter />);
        const buttonElement = wrapper.find(".goal-button");

        expect(buttonElement.exists()).toEqual(true);
        expect(buttonElement.simulate("click")).toHaveLength(1);
    });

    it("redcard-click click correct", () => {
        const wrapper = shallow(<Filter />);
        const buttonElement = wrapper.find(".redcard-button");

        expect(buttonElement.exists()).toEqual(true);
        expect(buttonElement.simulate("click")).toHaveLength(1);
    });
});