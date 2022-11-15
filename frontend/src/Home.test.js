import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./components/Home.js";
import { MemoryRouter, Route } from "react-router-dom";
afterEach(() => {
  cleanup();
});

test("renders", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const screenElement = screen.getByText("Mahir");
  waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
});
test("renders", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const screenElement = screen.getByText("Scope");
  waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
});
