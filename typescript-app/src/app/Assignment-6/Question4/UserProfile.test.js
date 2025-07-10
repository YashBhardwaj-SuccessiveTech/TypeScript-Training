import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserProfile from "@/Components/Assignment5Components/UserProfile";

describe("UserProfile Component", () => {
  const sampleUser = {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890"
  };

  beforeEach(() => {
    render(
      <UserProfile
        name={sampleUser.name}
        email={sampleUser.email}
        phone={sampleUser.phone}
      />
    );
  });

  describe("Initial Render", () => {
    it("should display the user name", () => {
      expect(screen.getByText(/name:/i)).toBeInTheDocument();
      expect(screen.getByText(sampleUser.name)).toBeInTheDocument();
    });

    it("should display the user email", () => {
      expect(screen.getByText(/email:/i)).toBeInTheDocument();
      expect(screen.getByText(sampleUser.email)).toBeInTheDocument();
    });

    it("should display the user phone number", () => {
      expect(screen.getByText(/phone:/i)).toBeInTheDocument();
      expect(screen.getByText(sampleUser.phone)).toBeInTheDocument();
    });

    it("should render the heading 'User Profile'", () => {
      expect(screen.getByRole("heading", { name: /user profile/i })).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("should not be editable by default (static profile)", async () => {
      const user = userEvent.setup();

      // Try clicking on any text just to ensure it's static (non-interactive)
      await user.click(screen.getByText(sampleUser.name));
      // Still should just display the same text
      expect(screen.getByText(sampleUser.name)).toBeInTheDocument();
    });
  });
});
