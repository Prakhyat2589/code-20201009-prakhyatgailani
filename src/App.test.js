import { render } from "@testing-library/react";
import App from "./App";

describe("Unit test for App", () => {
  test("renders App", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
