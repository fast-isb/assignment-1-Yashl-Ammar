import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import AdminHomePage from "../components/AdminHomePage.js";
afterEach(() => {
  cleanup();
});


test("renders Admin Homepage text check", () => {
    render(
      <MemoryRouter>
        <AdminHomePage />
      </MemoryRouter>
    );
    const screenElement = screen.getByText("Mahir");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
  
    const screenElement1 = screen.getByText("About");
    waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());
  
    const screenElement2 = screen.getByText("Scope");
    waitFor(() => expect(getByTestId(screenElement2)).toBeInTheDocument());
  });

  test("renders Admin HomePage button check", () => {
    render(
      <MemoryRouter>
        <AdminHomePage />
      </MemoryRouter>
    );
    const screenElement = screen.getByTestId("AdminSearchWorkerButton");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
  
    const screenElement1 = screen.getByTestId("AdminApproveWorkerButton");
    waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());
  
    const screenElement2 = screen.getByTestId("AdminSearchCustomerButton");
    waitFor(() => expect(getByTestId(screenElement2)).toBeInTheDocument());

    const screenElement3 = screen.getByTestId("AdminManageServiceButton");
    waitFor(() => expect(getByTestId(screenElement3)).toBeInTheDocument());
  });
