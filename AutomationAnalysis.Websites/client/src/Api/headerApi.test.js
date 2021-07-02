import axios from "axios";
import headerApi from "./headerApi";
import MockAdapter from "axios-mock-adapter";
const responseData = {
  data: {
    user: "sa",
    menus: [
      { url: "/app", name: "Home" },
      { url: "/app/report", name: "Report" },
    ],
  },
};
describe("Header Api", () => {
  it("loads nav-link", async () => {
    var mock = new MockAdapter(axios);
    mock.onGet("https://localhost:44300/api/header").reply(200);

    headerApi.getMenu().then((response) => {
      expect(response).toEqual(responseData);
      done();
    });
  });
});
