import { screen, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import WorkerSignUp from "../components/WorkerSignUp.js";
afterEach(() => {
  cleanup();
});

test("renders Worker Sign up text check", () => {
  render(
    <MemoryRouter>
      <WorkerSignUp />
    </MemoryRouter>
  );
  const screenElement = screen.getByText("Sign Up");
  waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());

  const screenElement1 = screen.getByText("First Name:");
  waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());

  const screenElement2 = screen.getByText("Last Names:");
  waitFor(() => expect(getByTestId(screenElement2)).toBeInTheDocument());

  const screenElement3 = screen.getByText("Date of Birth:");
  waitFor(() => expect(getByTestId(screenElement3)).toBeInTheDocument());

  const screenElement4 = screen.getByText("Phone Number:");
  waitFor(() => expect(getByTestId(screenElement4)).toBeInTheDocument());

  const screenElement5 = screen.getByText("Choose your domain:");
  waitFor(() => expect(getByTestId(screenElement5)).toBeInTheDocument());

  const screenElement6 = screen.getByText("Services you will provide:");
  waitFor(() => expect(getByTestId(screenElement6)).toBeInTheDocument());

  const screenElement7 = screen.getByText("House no./Unit:");
  waitFor(() => expect(getByTestId(screenElement7)).toBeInTheDocument());

  const screenElement8 = screen.getByText("Street:");
  waitFor(() => expect(getByTestId(screenElement8)).toBeInTheDocument());

  const screenElement9 = screen.getByText("Sector/Area:");
  waitFor(() => expect(getByTestId(screenElement9)).toBeInTheDocument());

  const screenElement10 = screen.getByText("City:");
  waitFor(() => expect(getByTestId(screenElement10)).toBeInTheDocument());

  const screenElement11 = screen.getByText("Username:");
  waitFor(() => expect(getByTestId(screenElement11)).toBeInTheDocument());

  const screenElement12 = screen.getByText("Password:");
  waitFor(() => expect(getByTestId(screenElement12)).toBeInTheDocument());

  const screenElement13 = screen.getByText("Confirm Password:");
  waitFor(() => expect(getByTestId(screenElement13)).toBeInTheDocument());
});

test("renders Worker Sign up button test", () => {
    render(
      <MemoryRouter>
        <WorkerSignUp />
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("signupbutton");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
});

test("renders Worker Sign up input field test", () => {
    render(
      <MemoryRouter>
        <WorkerSignUp />
      </MemoryRouter>
    );
    const screenElement = screen.queryByTestId("fnField");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
});


test("renders Worker Sign up input field test", () => {
    render(
      <MemoryRouter>
        <WorkerSignUp />
      </MemoryRouter>
    );
    const screenElement1 = screen.getByTestId("fnField");
    waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());

    const screenElement2 = screen.getByTestId("lnField");
    waitFor(() => expect(getByTestId(screenElement2)).toBeInTheDocument());

    const screenElement3 = screen.getByTestId("dobField");
    waitFor(() => expect(getByTestId(screenElement3)).toBeInTheDocument());

    const screenElement4 = screen.getByTestId("pnField");
    waitFor(() => expect(getByTestId(screenElement4)).toBeInTheDocument());

    const screenElement5 = screen.getByTestId("domainField");
    waitFor(() => expect(getByTestId(screenElement5)).toBeInTheDocument());

    const screenElement6 = screen.getByTestId("servicesField");
    waitFor(() => expect(getByTestId(screenElement6)).toBeInTheDocument());

    const screenElement7 = screen.getByTestId("HField");
    waitFor(() => expect(getByTestId(screenElement7)).toBeInTheDocument());

    const screenElement8 = screen.getByTestId("streetField");
    waitFor(() => expect(getByTestId(screenElement8)).toBeInTheDocument());

    const screenElement9 = screen.getByTestId("sectorField");
    waitFor(() => expect(getByTestId(screenElement9)).toBeInTheDocument());

    const screenElement10 = screen.getByTestId("cityField");
    waitFor(() => expect(getByTestId(screenElement10)).toBeInTheDocument());

    const screenElement11 = screen.getByTestId("usernameField");
    waitFor(() => expect(getByTestId(screenElement11)).toBeInTheDocument());

    const screenElement12 = screen.getByTestId("passField");
    waitFor(() => expect(getByTestId(screenElement12)).toBeInTheDocument());

    const screenElement13 = screen.getByTestId("confirmpassField");
    waitFor(() => expect(getByTestId(screenElement13)).toBeInTheDocument());
});



