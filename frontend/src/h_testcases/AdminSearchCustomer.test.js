import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import AdminSearchcustomer from "../components/AdminSearchCustomer.js";
import AdminViewcustomer from "../components/AdminViewCustomer.js";
afterEach(() => {
  cleanup();
});

test("renders Admin Search Worker text check", () => {
    render(
      <MemoryRouter>
        <AdminSearchcustomer />
      </MemoryRouter>
    );
    const screenElement = screen.getByText("Search customer");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
  
    const screenElement1 = screen.getByText("Search Results :");
    waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());
  });

  test("renders Admin Search Customer input field test", () => {
    render(
      <MemoryRouter>
        <AdminSearchcustomer />
      </MemoryRouter>
    );
    const screenElement = screen.getByTestId("searchField");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());

  });


  
  test("renders Admin Search customer input button test", () => {
    render(
      <MemoryRouter>
        <AdminSearchcustomer />
      </MemoryRouter>
    );
    const screenElement = screen.getByTestId("searchButton");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());

  });

