import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./Key";

describe("Given an Key component", () => {
  describe("When it recieves a text 'test'", () => {
    test("Then it should display the text 'test'", () => {
      const text = "text";

      const expectedText = "text";

      render(<Key text={text} isCalling={true} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});

export default Key;
