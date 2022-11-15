import {
  screen,
  cleanup,
  render,
  waitFor,
  getByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkersProfileManagement from "./components/WorkerProfileManagement.js";
import { MemoryRouter, Route } from "react-router-dom";
afterEach(() => {
  cleanup();
});
test("WorkerProfile Fields", () => {
  render(
    <MemoryRouter>
      <WorkersProfileManagement />
    </MemoryRouter>
  );
  const screenElement1 = screen.getByTestId("firstname");
  waitFor(() => expect(getByText(screenElement1)).toBeInTheDocument());
  const screenElement2 = screen.getByTestId("lastname");
  waitFor(() => expect(getByText(screenElement2)).toBeInTheDocument());
  const screenElement3 = screen.getByTestId("phonenumber");
  waitFor(() => expect(getByText(screenElement3)).toBeInTheDocument());
  const screenElement4 = screen.getByTestId("date");
  waitFor(() => expect(getByText(screenElement4)).toBeInTheDocument());
  const screenElement5 = screen.getByTestId("domain");
  waitFor(() => expect(getByText(screenElement5)).toBeInTheDocument());
  const screenElement6 = screen.getByTestId("services");
  waitFor(() => expect(getByText(screenElement6)).toBeInTheDocument());
  const screenElement7 = screen.getByTestId("houseno");
  waitFor(() => expect(getByText(screenElement7)).toBeInTheDocument());
  const screenElement8 = screen.getByTestId("street");
  waitFor(() => expect(getByText(screenElement8)).toBeInTheDocument());
  const screenElement9 = screen.getByTestId("sector");
  waitFor(() => expect(getByText(screenElement8)).toBeInTheDocument());
  const screenElement10 = screen.getByTestId("city");
  waitFor(() => expect(getByText(screenElement10)).toBeInTheDocument());
});
test("Worker Profile Managemet Button Test Case", () => {
  render(
    <MemoryRouter>
      <WorkersProfileManagement />
    </MemoryRouter>
  );

  const screenElement = screen.getByTestId("updatebutton");
  expect(screenElement).toBeInTheDocument();
});
test("Worker Profile Managemet Button Test Case", () => {
  render(
    <MemoryRouter>
      <WorkersProfileManagement />
    </MemoryRouter>
  );

  const screenElement = screen.getByTestId("deletebutton");
  expect(screenElement).toBeInTheDocument();
});
