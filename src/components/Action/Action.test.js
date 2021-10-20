import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it recieves a 'test' text'", () => {
    test("Then it should display the text", () => {
      const text = "text";

      const expectedText = "text";

      render(<Action text={text} actionOnClick={() => {}} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it recieves a function", () => {
    test("Then it should execute the function if it is clicked", () => {
      const text = "Juan";
      const actionOnClick = jest.fn();

      render(<Action text={text} actionOnClick={actionOnClick} />);
      const textElement = screen.getByText(text);
      userEvent.click(textElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
