import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./Key";

describe("Given an Key component", () => {
  describe("When it recieves a text 'test'", () => {
    test("Then it should display the text 'test'", () => {
      const text = "text";

      const expectedText = "text";

      render(<Key text={text} actionOnClick={() => {}} isCalling={true} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it recieves a function", () => {
    test("Then it should execute the function if it is clicked", () => {
      const text = "Juan";
      const actionOnClick = jest.fn();

      render(
        <Key text={text} actionOnClick={actionOnClick} isCalling={false} />
      );
      const textElement = screen.getByText(text);
      userEvent.click(textElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});

export default Key;
