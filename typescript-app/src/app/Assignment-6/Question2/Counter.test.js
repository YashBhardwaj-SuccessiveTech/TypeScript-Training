import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "@/Components/Assignment1Components/Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  describe("Initial Render", () => {
    it("should render counter text with initial value 0", () => {
      expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    });

    it("should render increment and decrement buttons", () => {
      expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("should increment the counter when + button is clicked", async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    });

    it("should decrement the counter when - button is clicked", async () => {
      const user = userEvent.setup();
      // First increment once to make count = 1
      await user.click(screen.getByRole("button", { name: "+" }));
      // Then decrement
      await user.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    });

    it("should not decrement below 0", async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    });

    it("should increment multiple times correctly", async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole("button", { name: "+" }));
      await user.click(screen.getByRole("button", { name: "+" }));
      await user.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByText(/Count: 3/i)).toBeInTheDocument();
    });
  });
});
