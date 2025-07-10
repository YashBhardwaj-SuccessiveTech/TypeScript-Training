import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "@/Components/Assignment5Components/LoginForm";

describe("LoginForm Component", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  describe("Initial Render", () => {
    it("should render username and password inputs", () => {
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("should render the submit button", () => {
      expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    });

    it("should not show 'Form Submitted' initially", () => {
      expect(screen.queryByText(/form submitted/i)).not.toBeInTheDocument();
    });
  });

  describe("Form Functionality", () => {
    it("should update input values when typing", async () => {
      const user = userEvent.setup();

      const usernameInput = screen.getByLabelText(/username/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(usernameInput, "john_doe");
      await user.type(passwordInput, "secret123");

      expect(usernameInput).toHaveValue("john_doe");
      expect(passwordInput).toHaveValue("secret123");
    });

    it("should show 'Form Submitted' after valid form submission", async () => {
      const user = userEvent.setup();

      await user.type(screen.getByLabelText(/username/i), "user1");
      await user.type(screen.getByLabelText(/password/i), "pass1");
      await user.click(screen.getByRole("button", { name: /login/i }));

      expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
    });

    it("should not submit the form if fields are empty", async () => {
      const user = userEvent.setup();

      // Click submit with empty inputs
      await user.click(screen.getByRole("button", { name: /login/i }));

      expect(screen.queryByText(/form submitted/i)).not.toBeInTheDocument();
    });
  });
});
