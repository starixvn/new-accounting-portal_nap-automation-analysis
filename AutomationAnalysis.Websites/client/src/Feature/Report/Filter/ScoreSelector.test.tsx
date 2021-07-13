
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import ScoreSelector from "./ScoreSelector";
describe("ScoreSelector Component", () => {
    it("render correct", () => {
        const { queryAllByText } = render(<ScoreSelector />);
        const text = queryAllByText("Home");
        expect(text).not.toBeNull();
    });

    it("render goal-select correct and test event change", () => {
        const wrapper = shallow(<ScoreSelector />);
        const selectElement = wrapper.find(".goal-select");

        expect(selectElement.exists()).toEqual(true);
        expect(selectElement.simulate("change", { target: { value: "Home" } })).toHaveLength(1);
        expect(selectElement.simulate("change", { target: { value: "Away" } })).toHaveLength(1);
    });

    it("render home-score-select correct and test event change", () => {
        const wrapper = shallow(<ScoreSelector />);
        const selectElement = wrapper.find(".home-score-select");

        expect(selectElement.exists()).toEqual(true);
        expect(selectElement.simulate("change", { target: { value: 1 } })).toHaveLength(1);
        expect(selectElement.simulate("change", { target: { value: 10 } })).toHaveLength(1);
    });

    it("render away-score-select correct and test event change", () => {
        const wrapper = shallow(<ScoreSelector />);
        const selectElement = wrapper.find(".away-score-select");

        expect(selectElement.exists()).toEqual(true);
        expect(selectElement.simulate("change", { target: { value: 3 } })).toHaveLength(1);
        expect(selectElement.simulate("change", { target: { value: 5 } })).toHaveLength(1);
    });
});