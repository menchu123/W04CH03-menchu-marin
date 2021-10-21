import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it recieves a 'test' text'", () => {
    test("Then it should display the text", () => {
      const text = "text";

      const expectedText = "text";

      render(<Action text={text} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
