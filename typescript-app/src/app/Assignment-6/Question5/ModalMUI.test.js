import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BasicModal from "@/Components/Assignment5Components/ModalMUI";

describe("BasicModal Component", () => {
  beforeEach(() => {
    render(<BasicModal />);
  });

  describe("Initial Render", () => {
    it("should render the open modal button", () => {
      expect(screen.getByRole("button", { name: /open modal/i })).toBeInTheDocument();
    });

    it("should not show modal content initially", () => {
      // Modal content should not be in the document initially
      expect(screen.queryByText(/text in a modal/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/duis mollis/i)).not.toBeInTheDocument();
    });
  });

  describe("Modal Functionality", () => {
    it("should open modal when the button is clicked", async () => {
      const user = userEvent.setup();

      await user.click(screen.getByRole("button", { name: /open modal/i }));

      expect(screen.getByText(/text in a modal/i)).toBeInTheDocument();
      expect(screen.getByText(/duis mollis/i)).toBeInTheDocument();
    });

    it("should close modal when clicking outside or pressing escape", async () => {
      const user = userEvent.setup();

      // Open modal first
      await user.click(screen.getByRole("button", { name: /open modal/i }));
      expect(screen.getByText(/text in a modal/i)).toBeInTheDocument();

      // Press Escape key to close modal
      await user.keyboard("{Escape}");
      expect(screen.queryByText(/text in a modal/i)).not.toBeInTheDocument();
    });
  });
});
