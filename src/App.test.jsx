import { descibe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { MemoryRouter } from "react-router-dom";

descibe("App Component", () => {
  it("renders Notfound Page", () => {
    render(
      <MemoryRouter initialEntries={["/heroes"]}>
        <App />
      </MemoryRouter>
    );
  });

  expect(
    screen.getByRole("heading", {
      level: 1,
    })
  ).toHaveTextContent("Page Not Found");
});
