import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it recieves a number array", () => {
    test("Then it should display a string with all the numbers", () => {
      const numberArray = [2, 4, 6, 3, 8, 0];
      const expectedText = "246380";

      render(<Display numbers={numberArray} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
