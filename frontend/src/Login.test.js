import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./components/Login.js";
import { MemoryRouter, Route } from "react-router-dom";
afterEach(() => {
  cleanup();
});

test("Login Button Test Case", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const screenElement = screen.getByTestId("loginButton");
  expect(screenElement).toBeInTheDocument();
});
test("Login Fields", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const screenElement1 = screen.getByTestId("UsernameInput");
  waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());
  const screenElement2 = screen.getByTestId("passwordfield");
  waitFor(() => expect(getByTestId(screenElement2)).toBeInTheDocument());
});
