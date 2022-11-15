import {
  screen,
  cleanup,
  render,
  waitFor,
  getByText,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkersProfile from "./components/WorkersProfile.js";
import { MemoryRouter, Route } from "react-router-dom";
afterEach(() => {
  cleanup();
});

test("Profile Frontend", () => {
  render(
    <MemoryRouter>
      <WorkersProfile />
    </MemoryRouter>
  );
  const screenElement1 = screen.getByText("Full Name");
  waitFor(() => expect(getByTestId(screenElement1)).toBeInTheDocument());
  const screenElement2 = screen.getByText("Username");
  waitFor(() => expect(getByTestId(screenElement2)).toBeInTheDocument());
  const screenElement3 = screen.getByText("Phone");
  waitFor(() => expect(getByTestId(screenElement3)).toBeInTheDocument());
  const screenElement4 = screen.getByText("Date of Birth");
  waitFor(() => expect(getByTestId(screenElement4)).toBeInTheDocument());
  const screenElement5 = screen.getByText("Domain");
  waitFor(() => expect(getByTestId(screenElement5)).toBeInTheDocument());
  const screenElement6 = screen.getByText("Services");
  waitFor(() => expect(getByTestId(screenElement6)).toBeInTheDocument());
  const screenElement7 = screen.getByText("House No");
  waitFor(() => expect(getByTestId(screenElement7)).toBeInTheDocument());
  const screenElement8 = screen.getByText("Street");
  waitFor(() => expect(getByTestId(screenElement8)).toBeInTheDocument());
  const screenElement9 = screen.getByText("Sector");
  waitFor(() => expect(getByTestId(screenElement8)).toBeInTheDocument());
  const screenElement10 = screen.getByText("City");
  waitFor(() => expect(getByTestId(screenElement10)).toBeInTheDocument());
});
