
import { render } from "@testing-library/react";
import ScoreSelector from "./ScoreSelector";
describe("ScoreSelector Component", () => {
    it("render correct", () => {
        const { queryAllByText } = render(<ScoreSelector />);
        const text = queryAllByText("Home");
        expect(text).not.toBeNull();
    });
});