import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import AdminSearchWorker from "../components/AdminSearchWorker.js";
afterEach(() => {
  cleanup();
});

test("renders Admin Search Worker text check", () => {
    render(
      <MemoryRouter>
        <AdminSearchWorker />
      </MemoryRouter>
    );
    const screenElement = screen.getByText("Search Worker");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
  
    const screenElement1 = screen.getByText("Search Results :");
    waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());
  });

  test("renders Admin Search Worker input field test", () => {
    render(
      <MemoryRouter>
        <AdminSearchWorker />
      </MemoryRouter>
    );
    const screenElement = screen.getByTestId("searchField");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());

  });


  
  test("renders Admin Search Worker input button test", () => {
    render(
      <MemoryRouter>
        <AdminSearchWorker />
      </MemoryRouter>
    );
    const screenElement = screen.getByTestId("searchButton");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());

  });


  