import RedirectToLogin from "./RedirectToLogin";
import React from "react";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import sinon from "sinon";

it("should show Home component for / router (getting array of routes)", async () => {
    Object.defineProperty(window, "location", {
        writable: true,
        value: {
            assign: () => {},
        },
    });
    sinon.stub(window.location, "assign");
    const component = mount(<RedirectToLogin />);
    await act(
        () =>
            new Promise<void>((resolve) => {
                setImmediate(() => {
                    component.update();
                    resolve();
                });
            })
    );
});
