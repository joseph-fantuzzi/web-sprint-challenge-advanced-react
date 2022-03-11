// Write your tests here
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppFunctional from "./AppFunctional";

jest.setTimeout(1000);
const waitForOptions = { timeout: 100 };
const queryOptions = { exact: false };

beforeEach(() => {
  render(<AppFunctional className="functional" />);
});

describe("App Functional Component", () => {
  test("sanity", () => {
    expect(true).toBe(true);
  });

  test("renders without errors", () => {
    render(<AppFunctional className="functional" />);
  });

  test("renders the coordinates heading and submit button on the screen", () => {
    const coordinatesHeading = screen.getByText("Coordinates (2, 2)");
    expect(coordinatesHeading).toBeVisible();
    expect(coordinatesHeading).toBeInTheDocument();
    const submitBtn = screen.getByTestId("submit");
    expect(submitBtn).toBeVisible();
    expect(submitBtn).toBeInTheDocument();
  });

  test("typing in the email input field changes the value of the input", () => {
    const emailInput = screen.getByPlaceholderText("type email");
    fireEvent.change(emailInput, { target: { value: "hello@gmail.com" } });
    expect(emailInput).toHaveValue("hello@gmail.com");
  });

  test("up left down right reset buttons are visible on the screen", () => {
    const leftBtn = screen.getByText("LEFT");
    const upBtn = screen.getByText("UP");
    const rightBtn = screen.getByText("RIGHT");
    const downBtn = screen.getByText("DOWN");
    const resetBtn = screen.getByText("reset");
    expect(leftBtn).toBeVisible();
    expect(leftBtn).toBeInTheDocument();
    expect(upBtn).toBeVisible();
    expect(upBtn).toBeInTheDocument();
    expect(rightBtn).toBeVisible();
    expect(rightBtn).toBeInTheDocument();
    expect(downBtn).toBeVisible();
    expect(downBtn).toBeInTheDocument();
    expect(resetBtn).toBeVisible();
    expect(resetBtn).toBeInTheDocument();
  });

  test("when clicking up it moves the coordinate heading to (2, 1)", () => {
    const upBtn = screen.getByText("UP");
    const coordinatesHeading = screen.getByText("Coordinates (2, 2)");
    fireEvent.click(upBtn);
    expect(coordinatesHeading.textContent).toBe("Coordinates (2, 1)");
  });

  test("when submitting an empty input, confirm the screen renders an error message", async () => {
    const submitBtn = screen.getByTestId("submit");
    fireEvent.click(submitBtn);
    await screen.findByText("Ouch: email is required", queryOptions, waitForOptions);
  });

  test("renders a success message when email is typed and submit button is clicked", async () => {
    const emailInput = screen.getByPlaceholderText("type email");
    fireEvent.change(emailInput, { target: { value: "hello@gmail.com" } });
    const submitBtn = screen.getByTestId("submit");
    fireEvent.click(submitBtn);
    await screen.findByText("hello win #27", queryOptions, waitForOptions);
  });
});
